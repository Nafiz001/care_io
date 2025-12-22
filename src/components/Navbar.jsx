'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useState } from 'react'

export default function Navbar() {
  const { data: session } = useSession()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="text-3xl transform group-hover:scale-110 transition">💙</div>
          <span className="text-2xl font-bold tracking-tight group-hover:text-yellow-200 transition">Care.IO</span>
        </Link>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        <div className={`md:flex md:items-center md:space-x-2 ${menuOpen ? 'flex flex-col absolute top-20 left-0 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-6 shadow-xl' : 'hidden md:flex'}`}>
          <Link href="/" className="px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition font-semibold" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="#services" className="px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition font-semibold" onClick={() => setMenuOpen(false)}>Services</Link>
          {session ? (
            <>
              <Link href="/my-bookings" className="px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition font-semibold" onClick={() => setMenuOpen(false)}>My Bookings</Link>
              <button onClick={() => { signOut(); setMenuOpen(false); }} className="px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition font-semibold bg-transparent border-none text-left">Logout 👋</button>
            </>
          ) : (
            <>
              <Link href="/login" className="px-4 py-2 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 transition font-semibold" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link href="/register" className="px-4 py-2 rounded-lg bg-yellow-400 text-purple-900 hover:bg-yellow-300 transition font-bold" onClick={() => setMenuOpen(false)}>Get Started</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}