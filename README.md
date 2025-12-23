# Care.IO - Baby Sitting & Elderly Care Service Platform

Live Link: https://careio-peach.vercel.app/

A Next.js web application providing reliable and trusted care services for children, elderly, and family members.

## Features

- **Responsive Design**: Mobile, tablet, and desktop support
- **User Authentication**: Email/Password and Google Social Login
- **Dynamic Booking System**: Select duration, location, and calculate costs automatically
- **Booking Management**: Track bookings with status (Pending/Confirmed/Completed/Cancelled)
- **Email Notifications**: Automatic invoice emails after booking
- **Service Pages**: Detailed information for Baby Care, Elderly Care, and Sick People Care

## Tech Stack

- **Framework**: Next.js 16.1.0
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Email**: Nodemailer

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, configure environment variables in `.env.local`:

```env
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
