'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { services } from '@/lib/data'

export default function MyBookings() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/login')
    } else {
      fetchBookings()
    }
  }, [session, status, router])

  const fetchBookings = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/bookings?userId=${session.user.id}`)
      if (!res.ok) {
        console.error('Failed to fetch bookings')
        setBookings([])
        return
      }
      const data = await res.json()
      setBookings(data)
    } catch (error) {
      console.error('Error fetching bookings:', error)
      setBookings([])
    } finally {
      setLoading(false)
    }
  }

  const handleCancel = async (bookingId) => {
    if (confirm('Are you sure you want to cancel this booking?')) {
      try {
        const res = await fetch('/api/booking/cancel', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ bookingId })
        })
        if (res.ok) {
          fetchBookings() // refetch
        } else {
          alert('Failed to cancel booking. Please try again.')
        }
      } catch (error) {
        console.error('Error cancelling booking:', error)
        alert('An error occurred. Please try again.')
      }
    }
  }

  const getServiceName = (id) => {
    const service = services.find(s => s.id === id)
    return service ? service.name : 'Unknown'
  }

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-300'
      case 'confirmed': return 'bg-green-100 text-green-800 border-green-300'
      case 'completed': return 'bg-blue-100 text-blue-800 border-blue-300'
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-300'
      default: return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  const getStatusIcon = (status) => {
    switch(status) {
      case 'pending': return '⏳'
      case 'confirmed': return '✅'
      case 'completed': return '🎉'
      case 'cancelled': return '❌'
      default: return '📋'
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
          <p className="mt-4 text-gray-600 font-semibold">Loading your bookings...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">My Bookings</h1>
          <p className="text-gray-600">Track and manage all your service bookings</p>
        </div>

        {bookings.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="text-6xl mb-4">📋</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">No bookings yet</h2>
            <p className="text-gray-600 mb-6">Start by booking one of our professional care services</p>
            <a href="/#services" className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Browse Services
            </a>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {bookings.map(booking => (
              <div key={booking.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-1">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{getServiceName(booking.serviceId)}</h3>
                      <p className="text-sm text-indigo-100">Booking ID: #{booking.id}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(booking.status)}`}>
                      {getStatusIcon(booking.status)} {booking.status.toUpperCase()}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 space-y-3">
                  <div className="flex items-start">
                    <span className="text-xl mr-3">⏱️</span>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Duration</p>
                      <p className="text-gray-800 font-semibold">{booking.duration} {booking.duration > 1 ? 'days' : 'day'}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-xl mr-3">📍</span>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 uppercase font-semibold">Location</p>
                      <p className="text-gray-800 font-medium">{booking.location}</p>
                      <p className="text-sm text-gray-600 mt-1">{booking.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-xl mr-3">💰</span>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Total Cost</p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{booking.totalCost} BDT</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-xl mr-3">📅</span>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Booked On</p>
                      <p className="text-gray-800 font-medium">{new Date(booking.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                  </div>

                  {booking.status === 'pending' && (
                    <button 
                      onClick={() => handleCancel(booking.id)} 
                      className="w-full mt-4 bg-red-500 text-white px-4 py-3 rounded-xl hover:bg-red-600 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                    >
                      <span>❌</span>
                      <span>Cancel Booking</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}