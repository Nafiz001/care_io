import { services } from '@/lib/data'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const serviceIcons = {
  'baby-care': '👶',
  'elderly-care': '👵',
  'sick-care': '🏥'
}

const serviceFeatures = {
  'baby-care': [
    'Trained and certified babysitters',
    'Safe and fun activities for children',
    'Flexible scheduling',
    'Background-checked caretakers',
    'Emergency contact support'
  ],
  'elderly-care': [
    'Assistance with daily activities',
    'Medication reminders',
    'Health monitoring',
    'Companionship and emotional support',
    'Meal preparation assistance'
  ],
  'sick-care': [
    'Skilled medical caretakers',
    'Post-surgery recovery support',
    'Medication management',
    'Physical therapy assistance',
    '24/7 availability'
  ]
}

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

  const icon = serviceIcons[params.id] || '💼'
  const features = serviceFeatures[params.id] || []

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{icon}</div>
            <h1 className="text-4xl font-bold mb-4">{service.name}</h1>
            <p className="text-xl text-gray-700">{service.description}</p>
          </div>
          
          <div className="border-t border-b py-6 my-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {service.charge} BDT
              </div>
              <div className="text-gray-600">per {service.unit}</div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Service Features</h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <Link 
              href={`/booking/${service.id}`} 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 inline-block font-bold text-lg transition"
            >
              Book This Service Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}