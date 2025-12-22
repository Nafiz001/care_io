'use client'

import { SessionProvider } from 'next-auth/react'
import Navbar from './Navbar'
import Footer from './Footer'

export function Providers({ children }) {
  return (
    <SessionProvider>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </SessionProvider>
  )
}