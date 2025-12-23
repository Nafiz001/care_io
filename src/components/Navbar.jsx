'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useState, useEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function Navbar() {
  const { data: session, status } = useSession()
  const [menuOpen, setMenuOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const profileRef = useRef(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogout = () => {
    setProfileOpen(false)
    setMenuOpen(false)
    signOut({ callbackUrl: '/' })
  }

  const scrollToServices = (e) => {
    e.preventDefault()
    setMenuOpen(false)
    if (window.location.pathname !== '/') {
      router.push('/#services')
    } else {
      const element = document.getElementById('services')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const getInitials = (name) => {
    if (!name) return 'U'
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
  }

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-xl sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">❤️</div>
          <span className="text-2xl font-bold tracking-tight group-hover:text-yellow-200 transition-colors duration-300">Care.IO</span>
        </Link>
        
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        <div className={`md:flex md:items-center md:space-x-2 ${menuOpen ? 'flex flex-col absolute top-20 left-0 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-6 shadow-2xl space-y-2 md:space-y-0' : 'hidden md:flex'}`}>
          <Link href="/" className={`px-4 py-2 rounded-lg hover:opacity-80 transition-all duration-300 font-semibold text-white ${pathname === '/' ? 'border-b-2 border-yellow-400' : ''}`} onClick={() => setMenuOpen(false)}>🏠 Home</Link>
          <button onClick={scrollToServices} className="px-4 py-2 rounded-lg hover:opacity-80 transition-all duration-300 font-semibold text-left text-white">🔧 Services</button>
          
          {status === 'authenticated' ? (
            <>
              <Link href="/my-bookings" className={`px-4 py-2 rounded-lg hover:opacity-80 transition-all duration-300 font-semibold text-white ${pathname === '/my-bookings' ? 'border-b-2 border-yellow-400' : ''}`} onClick={() => setMenuOpen(false)}>📋 My Bookings</Link>
              
              {/* Desktop Profile Dropdown */}
              <div className="hidden md:block relative" ref={profileRef}>
                <button 
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-full hover:opacity-80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center font-bold text-sm shadow-lg">
                    {getInitials(session.user?.name)}
                  </div>
                  <svg className={`w-4 h-4 transition-transform duration-300 ${profileOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 animate-fadeIn">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-3 text-white">
                      <p className="font-bold text-sm">{session.user?.name}</p>
                      <p className="text-xs opacity-90 truncate">{session.user?.email}</p>
                    </div>
                    <div className="py-2">
                      <Link href="/my-bookings" className="flex items-center px-4 py-2.5 text-gray-700 hover:bg-indigo-50 transition-colors" onClick={() => setProfileOpen(false)}>
                        <span className="mr-3">📋</span>
                        <span className="font-medium">My Bookings</span>
                      </Link>
                      <button 
                        onClick={handleLogout}
                        className="w-full flex items-center px-4 py-2.5 text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <span className="mr-3">🚪</span>
                        <span className="font-medium">Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Logout */}
              <button onClick={handleLogout} className="md:hidden px-4 py-2 rounded-lg hover:opacity-80 transition-all duration-300 font-semibold bg-transparent border-none text-left flex items-center space-x-2 text-white">
                <span>🚪</span>
                <span>Logout</span>
              </button>
            </>
          ) : status === 'unauthenticated' ? (
            <>
              <Link href="/login" className="px-4 py-2 rounded-lg hover:opacity-80 transition-all duration-300 font-semibold text-white" onClick={() => setMenuOpen(false)}>🔐 Login</Link>
              <Link href="/register" className="px-5 py-2 rounded-lg bg-yellow-400 text-purple-900 hover:bg-yellow-300 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5" onClick={() => setMenuOpen(false)}>✨ Get Started</Link>
            </>
          ) : (
            // Loading state - show nothing to prevent flash
            <div className="w-20 h-8 bg-white bg-opacity-20 rounded-lg animate-pulse"></div>
          )}
        </div>
      </div>
    </nav>
  )
}