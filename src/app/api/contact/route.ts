import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

type ContactRequest = {
  name: string;
  email: string;
  message: string;
  scraperCheck: string;
};

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

  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    console.error('SENDGRID_API_KEY is not configured');
    return NextResponse.json({ success: false, message: 'Email service not configured' }, { status: 500 });
  }

  const toEmail = process.env.CONTACT_EMAIL || 'n.chase.spencer@gmail.com';
  const fromEmail = process.env.SENDGRID_FROM_EMAIL || 'noreply@chasethedeveloper.com';

  const payload = {
    personalizations: [
      {
        to: [{ email: toEmail }],
      },
    ],
    from: { email: fromEmail },
    reply_to: { email },
    subject: `Portfolio Contact: ${name}`,
    content: [
      {
        type: 'text/plain',
        value: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      },
      {
        type: 'text/html',
        value: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      },
    ],
  };

  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('SendGrid error:', response.status, errorText);
      return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('SendGrid error:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
  }
}
