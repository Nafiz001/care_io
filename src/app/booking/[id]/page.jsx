'use client'

import { use, useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { services } from '@/lib/data'

const divisions = ['Dhaka', 'Chittagong', 'Rajshahi', 'Khulna', 'Barisal', 'Sylhet', 'Rangpur']

export default function Booking({ params }) {
  const { id } = use(params)
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

  const service = services.find(s => s.id === id)

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push(`/login?redirect=/booking/${id}`)
    }
  }, [session, status, router, id])

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
      router.push(`/login?redirect=/booking/${id}`)
      return
    }
    setLoading(true)
    try {
      const location = `${form.division}, ${form.district}, ${form.city}, ${form.area}`
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceId: id,
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
    } catch (error) {
      alert('An error occurred. Please try again.')
    }
    setLoading(false)
  }

  if (!service) return <div className="container mx-auto py-16 px-4 text-center">Service not found</div>

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-2 text-center">Book {service.name}</h1>
          <p className="text-center text-gray-600 mb-8">Fill out the form below to complete your booking</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Service Rate:</span>
                <span className="text-blue-600 font-bold">{service.charge} BDT/{service.unit}</span>
              </div>
            </div>

            <div>
              <label className="block mb-2 font-semibold">Duration (days) <span className="text-red-500">*</span></label>
              <input
                type="number"
                name="duration"
                value={form.duration}
                onChange={handleChange}
                min="1"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-semibold">Division <span className="text-red-500">*</span></label>
                <select
                  name="division"
                  value={form.division}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Division</option>
                  {divisions.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              
              <div>
                <label className="block mb-2 font-semibold">District <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="district"
                  value={form.district}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-semibold">City <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Area <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="area"
                  value={form.area}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-semibold">Full Address <span className="text-red-500">*</span></label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your complete address..."
                required
              />
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-500">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-1">Total Cost</div>
                <div className="text-4xl font-bold text-green-600">{totalCost} BDT</div>
                <div className="text-sm text-gray-600 mt-1">for {form.duration} {form.duration > 1 ? 'days' : 'day'}</div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-full hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed font-bold text-xl transition shadow-xl hover:shadow-2xl"
            >
              {loading ? '⏳ Processing...' : '✅ Confirm Booking'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}