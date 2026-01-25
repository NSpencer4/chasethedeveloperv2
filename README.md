# Chase Spencer's Interactive Resume V2
This project is a rewrite using React of my first interactive resume where I used Angular. That code can be found here: https://github.com/NSpencer4/chasethedeveloper.

## Deployment

This application is deployed on Cloudflare Pages as a static site with Cloudflare Pages Functions.

### Architecture

- **Frontend**: Next.js static export (SSG)
- **API**: Cloudflare Pages Functions (serverless)
- **Build**: `yarn build` generates static files in `out/` directory
- **Deploy**: `yarn deploy` deploys to Cloudflare Pages

### Contact Form API

The contact form uses a Cloudflare Pages Function located at `functions/api/contact.ts`. This function:
- Runs at `/api/contact` on Cloudflare's edge network
- Sends emails via AWS SES with AWS Signature V4 authentication
- Includes CORS headers for cross-origin requests

#### Environment Variables

Configure these in your Cloudflare Pages project settings (Settings > Environment Variables):

- `AWS_ACCESS_KEY_ID` - AWS access key for SES
- `AWS_SECRET_ACCESS_KEY` - AWS secret key for SES
- `AWS_REGION` - AWS region (default: us-east-1)
- `SES_FROM_EMAIL` - Email address to send from (must be verified in SES)
- `CONTACT_EMAIL` - Email address to receive contact form submissions

#### Local Development

For local development with the Pages Function:

1. Create a `.dev.vars` file in the project root:
```bash
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
AWS_REGION=us-east-1
SES_FROM_EMAIL=noreply@chasethedeveloper.com
CONTACT_EMAIL=your_email@example.com
```

2. Build the static site: `yarn build`
3. Run locally: `yarn preview`
4. Access at `http://localhost:8788`

### Deployment Commands

```bash
# Build the static site
yarn build

# Deploy to Cloudflare Pages
yarn deploy

# Preview locally
yarn preview
```
