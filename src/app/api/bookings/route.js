import { bookings } from '@/lib/bookings'
import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get('userId')
  console.log('GET bookings - userId:', userId, 'total bookings:', bookings.length)
  const userBookings = bookings.filter(b => {
    console.log('Comparing booking userId:', b.userId, 'with session userId:', userId, 'match:', b.userId == userId)
    return b.userId == userId
  })
  console.log('Returning', userBookings.length, 'bookings for user', userId)
  return NextResponse.json(userBookings)
}