import { NextRequest, NextResponse } from 'next/server';

type ContactRequest = {
  name: string;
  email: string;
  message: string;
  scraperCheck: string;
};

// AWS Signature Version 4 signing utilities
async function sha256(message: string): Promise<ArrayBuffer> {
  const encoder = new TextEncoder();
  return crypto.subtle.digest('SHA-256', encoder.encode(message));
}

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

async function hmacSha256(key: ArrayBuffer, message: string): Promise<ArrayBuffer> {
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    key,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const encoder = new TextEncoder();
  return crypto.subtle.sign('HMAC', cryptoKey, encoder.encode(message));
}

async function getSignatureKey(
  secretKey: string,
  dateStamp: string,
  region: string,
  service: string
): Promise<ArrayBuffer> {
  const encoder = new TextEncoder();
  const kDate = await hmacSha256(encoder.encode(`AWS4${secretKey}`).buffer as ArrayBuffer, dateStamp);
  const kRegion = await hmacSha256(kDate, region);
  const kService = await hmacSha256(kRegion, service);
  return hmacSha256(kService, 'aws4_request');
}

async function signRequest(
  method: string,
  url: string,
  headers: Record<string, string>,
  body: string,
  accessKeyId: string,
  secretAccessKey: string,
  region: string,
  service: string
): Promise<Record<string, string>> {
  const urlObj = new URL(url);
  const now = new Date();
  const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, '');
  const dateStamp = amzDate.slice(0, 8);

  const payloadHash = toHex(await sha256(body));

  const signedHeaders = Object.keys(headers)
    .map((k) => k.toLowerCase())
    .sort()
    .join(';');

  const canonicalHeaders = Object.entries(headers)
    .map(([k, v]) => `${k.toLowerCase()}:${v.trim()}`)
    .sort()
    .join('\n');

  const canonicalRequest = [
    method,
    urlObj.pathname,
    urlObj.searchParams.toString(),
    canonicalHeaders + '\n',
    signedHeaders,
    payloadHash,
  ].join('\n');

  const credentialScope = `${dateStamp}/${region}/${service}/aws4_request`;
  const stringToSign = [
    'AWS4-HMAC-SHA256',
    amzDate,
    credentialScope,
    toHex(await sha256(canonicalRequest)),
  ].join('\n');

  const signingKey = await getSignatureKey(secretAccessKey, dateStamp, region, service);
  const signature = toHex(await hmacSha256(signingKey, stringToSign));

  const authorizationHeader = `AWS4-HMAC-SHA256 Credential=${accessKeyId}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;

  return {
    ...headers,
    Authorization: authorizationHeader,
    'x-amz-date': amzDate,
    'x-amz-content-sha256': payloadHash,
  };
}

export async function POST(request: NextRequest) {
  const { name, email, message, scraperCheck } = (await request.json()) as ContactRequest;

  // Honeypot check - if filled, it's likely a bot
  if (scraperCheck) {
    return NextResponse.json({ success: false, message: 'Invalid submission' }, { status: 400 });
  }

  // Validate required fields
  if (!name || !email || !message) {
    return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ success: false, message: 'Invalid email format' }, { status: 400 });
  }

  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
  const region = process.env.AWS_REGION || 'us-east-1';

  if (!accessKeyId || !secretAccessKey) {
    console.error('AWS credentials are not configured');
    return NextResponse.json({ success: false, message: 'Email service not configured' }, { status: 500 });
  }

  const toEmail = process.env.CONTACT_EMAIL || 'n.chase.spencer@gmail.com';
  const fromEmail = process.env.SES_FROM_EMAIL || 'noreply@chasethedeveloper.com';

  const sesPayload = {
    Content: {
      Simple: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <h3>Message:</h3>
              <p>${message.replace(/\n/g, '<br>')}</p>
            `,
          },
          Text: {
            Charset: 'UTF-8',
            Data: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: `Portfolio Contact: ${name}`,
        },
      },
    },
    Destination: {
      ToAddresses: [toEmail],
    },
    FromEmailAddress: fromEmail,
    ReplyToAddresses: [email],
  };

  const sesUrl = `https://email.${region}.amazonaws.com/v2/email/outbound-emails`;
  const body = JSON.stringify(sesPayload);

  const baseHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    host: `email.${region}.amazonaws.com`,
  };

  try {
    const signedHeaders = await signRequest(
      'POST',
      sesUrl,
      baseHeaders,
      body,
      accessKeyId,
      secretAccessKey,
      region,
      'ses'
    );

    const response = await fetch(sesUrl, {
      method: 'POST',
      headers: signedHeaders,
      body,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('SES error:', response.status, errorText);
      return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('SES error:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
  }
}
