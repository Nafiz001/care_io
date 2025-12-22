import { users } from '@/lib/users'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const { name, email, password, nid, contact } = await request.json()

  // Validate
  if (!name || !email || !password || !nid || !contact) {
    return NextResponse.json({ error: 'All fields required' }, { status: 400 })
  }
  if (password.length < 6 || !/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
    return NextResponse.json({ error: 'Password must be 6+ chars with upper and lower case' }, { status: 400 })
  }
  if (users.find(u => u.email === email)) {
    return NextResponse.json({ error: 'Email already exists' }, { status: 400 })
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
    password, // hash in real
    nid,
    contact
  }
  users.push(newUser)

  return NextResponse.json({ message: 'User registered successfully' })
}