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
  const { id } = await params
  const service = services.find(s => s.id === id)
  if (!service) return { title: 'Service Not Found' }
  return {
    title: `${service.name} - Care.IO`,
    description: service.description
  }
}

export default async function ServiceDetail({ params }) {
  const { id } = await params
  const service = services.find(s => s.id === id)
  if (!service) {
    notFound()
  }

  const icon = serviceIcons[id] || '💼'
  const features = serviceFeatures[id] || []

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-12 text-center text-white">
            <div className="text-7xl mb-6 animate-bounce">{icon}</div>
            <h1 className="text-5xl font-bold mb-4">{service.name}</h1>
            <p className="text-xl opacity-95 max-w-2xl mx-auto">{service.description}</p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 py-8">
            <div className="text-center">
              <div className="text-sm text-gray-600 uppercase font-semibold mb-2">Service Rate</div>
              <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                {service.charge} BDT
              </div>
              <div className="text-gray-600 text-lg">per {service.unit}</div>
            </div>
          </div>
        </div>

        {/* Features Card */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-8">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Service Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl hover:shadow-md transition-all duration-300">
                <span className="text-2xl text-green-500 mr-4 mt-1">✓</span>
                <span className="text-gray-700 text-lg font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl shadow-xl p-10 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Ready to get started?</h3>
          <p className="text-gray-600 mb-8 text-lg">Book your service now and experience professional care</p>
          <Link 
            href={`/booking/${id}`} 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-5 rounded-full hover:from-indigo-700 hover:to-purple-700 inline-flex items-center space-x-3 font-bold text-xl transition shadow-2xl hover:shadow-3xl hover:scale-105 transform"
          >
            <span>📅</span>
            <span>Book This Service Now</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}