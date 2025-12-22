import { bookings } from '@/lib/bookings'
import { services } from '@/lib/data'
import { users } from '@/lib/users'
import { sendInvoiceEmail } from '@/lib/email'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { serviceId, duration, location, address, totalCost, userId } = await request.json()

    const service = services.find(s => s.id === serviceId)
    if (!service) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 })
    }

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

    // Send email (don't fail if email fails)
    try {
      const user = users.find(u => u.id == userId)
      if (user && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        await sendInvoiceEmail(user.email, booking)
      }
    } catch (emailError) {
      console.error('Failed to send email:', emailError)
      // Continue anyway - booking was created successfully
    }

    return NextResponse.json(booking)
  } catch (error) {
    console.error('Booking error:', error)
    return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 })
  }
}