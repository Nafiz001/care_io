import { bookings } from '@/lib/bookings'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const { bookingId } = await request.json()

  const booking = bookings.find(b => b.id == bookingId)
  if (booking) {
    booking.status = 'cancelled'
    return NextResponse.json({ success: true })
  }
  return NextResponse.json({ error: 'Booking not found' }, { status: 404 })
}