import { bookings } from '@/lib/bookings'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const { serviceId, duration, location, address, totalCost, userId } = await request.json()

  const booking = {
    id: bookings.length + 1,
    serviceId,
    duration,
    location,
    address,
    totalCost,
    status: 'pending',
    userId,
    createdAt: new Date().toISOString()
  }

  bookings.push(booking)

  return NextResponse.json(booking)
}