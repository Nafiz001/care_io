'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false
    })
    if (result.error) {
      setError('Invalid credentials')
    } else {
      router.push('/my-bookings')
    }
  }

  return (
    <div className="container mx-auto py-16 px-4 max-w-md">
      <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
      </form>
      <div className="mt-4">
        <button
          onClick={() => signIn('google')}
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          Login with Google
        </button>
      </div>
      <p className="mt-4 text-center">Don't have an account? <Link href="/register" className="text-blue-600">Register</Link></p>
    </div>
  )
}