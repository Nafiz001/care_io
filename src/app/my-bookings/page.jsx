'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { services } from '@/lib/data'

export default function MyBookings() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/login')
    } else {
      fetchBookings()
    }
  }, [session, status, router])

  const fetchBookings = async () => {
    const res = await fetch(`/api/bookings?userId=${session.user.id}`)
    const data = await res.json()
    setBookings(data)
  }

  const handleCancel = async (bookingId) => {
    if (confirm('Are you sure you want to cancel this booking?')) {
      await fetch('/api/booking/cancel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bookingId })
      })
      fetchBookings() // refetch
    }
  }

  const getServiceName = (id) => {
    const service = services.find(s => s.id === id)
    return service ? service.name : 'Unknown'
  }

  if (status === 'loading') return <div>Loading...</div>

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">My Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <div className="space-y-4">
          {bookings.map(booking => (
            <div key={booking.id} className="border p-4 rounded shadow">
              <h3 className="text-xl font-semibold">{getServiceName(booking.serviceId)}</h3>
              <p>Duration: {booking.duration} days</p>
              <p>Location: {booking.location}</p>
              <p>Address: {booking.address}</p>
              <p>Total Cost: {booking.totalCost} BDT</p>
              <p>Status: <span className={`font-semibold ${booking.status === 'pending' ? 'text-yellow-600' : booking.status === 'confirmed' ? 'text-green-600' : booking.status === 'cancelled' ? 'text-red-600' : 'text-blue-600'}`}>{booking.status}</span></p>
              <p>Created: {new Date(booking.createdAt).toLocaleDateString()}</p>
              {booking.status === 'pending' && (
                <button onClick={() => handleCancel(booking.id)} className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Cancel Booking</button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}