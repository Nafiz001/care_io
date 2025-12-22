import { Geist, Geist_Mono } from "next/font/google";
import { SessionProvider } from 'next-auth/react'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Care.IO - Baby Sitting & Elderly Care Service Platform",
  description: "Reliable and trusted care services for children, elderly, and family members. Book babysitting, elderly care, and special care services easily.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
