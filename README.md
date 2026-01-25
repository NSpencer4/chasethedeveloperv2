# Chase Spencer's Interactive Resume V2
This project is a rewrite using React of my first interactive resume where I used Angular. That code can be found here: https://github.com/NSpencer4/chasethedeveloper.

## Deployment

This application is deployed on Cloudflare Pages using OpenNext for Cloudflare.

### Contact Form API

The contact form uses a Cloudflare Pages Function located at `functions/api/contact.ts` instead of a Next.js API route. This is necessary because Next.js API routes don't work properly on Cloudflare Pages.

#### Environment Variables

Make sure to configure the following environment variables in your Cloudflare Pages project settings:

- `AWS_ACCESS_KEY_ID` - AWS access key for SES
- `AWS_SECRET_ACCESS_KEY` - AWS secret key for SES
- `AWS_REGION` - AWS region (default: us-east-1)
- `SES_FROM_EMAIL` - Email address to send from (must be verified in SES)
- `CONTACT_EMAIL` - Email address to receive contact form submissions

#### Local Development

For local development, create a `.env` file based on `.env.example` with your AWS SES credentials.
