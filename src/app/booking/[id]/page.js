'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { services } from '@/lib/data'

const divisions = ['Dhaka', 'Chittagong', 'Rajshahi', 'Khulna', 'Barisal', 'Sylhet', 'Rangpur']

export default function Booking({ params }) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [form, setForm] = useState({
    duration: 1,
    division: '',
    district: '',
    city: '',
    area: '',
    address: ''
  })
  const [totalCost, setTotalCost] = useState(0)
  const [loading, setLoading] = useState(false)

  const service = services.find(s => s.id === params.id)

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push(`/login?redirect=/booking/${params.id}`)
    }
  }, [session, status, router, params.id])

  useEffect(() => {
    if (service) {
      setTotalCost(form.duration * service.charge)
    }
  }, [form.duration, service])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!session?.user?.id) {
      router.push(`/login?redirect=/booking/${params.id}`)
      return
    }
    setLoading(true)
    const location = `${form.division}, ${form.district}, ${form.city}, ${form.area}`
    const res = await fetch('/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        serviceId: params.id,
        duration: form.duration,
        location,
        address: form.address,
        totalCost,
        userId: session.user.id
      })
    })
    if (res.ok) {
      alert('Booking confirmed! Check your email for the invoice.')
      router.push('/my-bookings')
    } else {
      alert('Booking failed. Please try again.')
    }
    setLoading(false)
  }

  if (!service) return <div>Service not found</div>

  return (
    <div className="container mx-auto py-16 px-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Book {service.name}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Duration (days)</label>
          <input
            type="number"
            name="duration"
            value={form.duration}
            onChange={handleChange}
            min="1"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Division</label>
          <select
            name="division"
            value={form.division}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Division</option>
            {divisions.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
        <div>
          <label className="block mb-2">District</label>
          <input
            type="text"
            name="district"
            value={form.district}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2">City</label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Area</label>
          <input
            type="text"
            name="area"
            value={form.area}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Address</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="text-xl font-semibold">
          Total Cost: {totalCost} BDT
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Booking...' : 'Confirm Booking'}
        </button>
      </form>
    </div>
  )
}