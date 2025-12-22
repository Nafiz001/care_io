'use client'

import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from '@/components/providers'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Care.IO - Baby Sitting & Elderly Care Service Platform</title>
        <meta name="description" content="Reliable and trusted care services for children, elderly, and family members. Book babysitting, elderly care, and special care services easily." />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
