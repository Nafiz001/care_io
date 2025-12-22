import { bookings } from '@/lib/bookings'
import { services } from '@/lib/data'
import { users } from '@/lib/users'
import { sendInvoiceEmail } from '@/lib/email'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const { serviceId, duration, location, address, totalCost, userId } = await request.json()

  const service = services.find(s => s.id === serviceId)
  const booking = {
    id: bookings.length + 1,
    serviceId,
    serviceName: service.name,
    duration,
    location,
    address,
    totalCost,
    status: 'pending',
    userId,
    createdAt: new Date().toISOString()
  }

  bookings.push(booking)

  // Send email
  const user = users.find(u => u.id == userId)
  if (user) {
    await sendInvoiceEmail(user.email, booking)
  }

  return NextResponse.json(booking)
}