'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useState } from 'react'

export default function Navbar() {
  const { data: session } = useSession()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Care.IO</Link>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        <div className={`md:flex md:space-x-4 ${menuOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-blue-600 p-4' : 'hidden md:flex'}`}>
          <Link href="/" className="hover:underline py-2 md:py-0" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="#services" className="hover:underline py-2 md:py-0" onClick={() => setMenuOpen(false)}>Services</Link>
          {session ? (
            <>
              <Link href="/my-bookings" className="hover:underline py-2 md:py-0" onClick={() => setMenuOpen(false)}>My Bookings</Link>
              <button onClick={() => { signOut(); setMenuOpen(false); }} className="hover:underline bg-transparent border-none text-left py-2 md:py-0">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:underline py-2 md:py-0" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link href="/register" className="hover:underline py-2 md:py-0" onClick={() => setMenuOpen(false)}>Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}