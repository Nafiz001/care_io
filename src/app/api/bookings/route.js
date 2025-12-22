import { bookings } from '@/lib/bookings'
import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get('userId')
  const userBookings = bookings.filter(b => b.userId == userId)
  return NextResponse.json(userBookings)
}