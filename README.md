# Jamfify Africa — Vercel Deploy

React + Vite + Tailwind portal with a Vercel serverless email function.

## Local
npm install
npm run dev

## Deploy to Vercel
- Import project at https://vercel.com/new
- Build Command: npm run build
- Output Directory: dist
- Add Environment Variables:
  SMTP_HOST=your.smtp.host
  SMTP_PORT=587
  SMTP_USER=your_smtp_username
  SMTP_PASS=your_smtp_password
  MAIL_TO=your_destination_email@example.com
  MAIL_FROM=Jamfify Africa <no-reply@yourdomain.com>

## Notes
- Logo in /public/logo.png
- Colors follow Jamf-like style
- Contact form posts to /api/contact using Nodemailer
