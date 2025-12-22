'use client'

import { SessionProvider } from 'next-auth/react'
import Navbar from './Navbar'

export function Providers({ children }) {
  return (
    <SessionProvider>
      <Navbar />
      {children}
    </SessionProvider>
  )
}