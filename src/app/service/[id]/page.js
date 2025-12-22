import { services } from '@/lib/data'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
  const service = services.find(s => s.id === params.id)
  if (!service) return { title: 'Service Not Found' }
  return {
    title: `${service.name} - Care.IO`,
    description: service.description
  }
}

export default function ServiceDetail({ params }) {
  const service = services.find(s => s.id === params.id)
  if (!service) {
    notFound()
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
      <p className="text-lg mb-8">{service.description}</p>
      <p className="text-xl font-semibold mb-8">Charge: {service.charge} BDT per {service.unit}</p>
      <Link href={`/booking/${service.id}`} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Book Service</Link>
    </div>
  )
}