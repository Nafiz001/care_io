import Link from 'next/link'

export const metadata = {
  title: "Care.IO - Home",
  description: "Reliable and trusted care services for children, elderly, and family members. Book babysitting, elderly care, and special care services easily."
}

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Banner/Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-6">Care for Your Loved Ones with Care.IO</h1>
          <p className="text-2xl mb-8">Professional, Reliable, and Trusted Caregiving Services</p>
          <p className="text-lg mb-10 max-w-3xl mx-auto">
            Whether you need help with babysitting, elderly care, or special medical assistance, 
            we connect you with verified and experienced caregivers who genuinely care.
          </p>
          <Link href="#services" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">About Care.IO</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            Our mission is to make quality caregiving accessible, secure, and stress-free for everyone. 
            We carefully vet our caretakers to ensure your family receives the best possible care.
          </p>
          
          {/* Success Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-lg text-gray-700">Verified Caretakers</div>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">2000+</div>
              <div className="text-lg text-gray-700">Successful Bookings</div>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-lg text-gray-700">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Choose the care service that best fits your needs</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white text-center p-8 border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="text-5xl mb-4">👶</div>
              <h3 className="text-2xl font-bold mb-4">Baby Care</h3>
              <p className="text-gray-600 mb-6 min-h-[60px]">Professional babysitting services with trained caretakers who provide safe, fun, and nurturing care for your little ones.</p>
              <div className="text-xl font-semibold text-blue-600 mb-6">500 BDT/day</div>
              <Link href="/service/baby-care" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block font-semibold">
                Learn More
              </Link>
            </div>
            <div className="bg-white text-center p-8 border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="text-5xl mb-4">👵</div>
              <h3 className="text-2xl font-bold mb-4">Elderly Care</h3>
              <p className="text-gray-600 mb-6 min-h-[60px]">Compassionate care for your elderly family members with assistance in daily activities and health monitoring.</p>
              <div className="text-xl font-semibold text-blue-600 mb-6">600 BDT/day</div>
              <Link href="/service/elderly-care" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block font-semibold">
                Learn More
              </Link>
            </div>
            <div className="bg-white text-center p-8 border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold mb-4">Sick People Care</h3>
              <p className="text-gray-600 mb-6 min-h-[60px]">Specialized care for those who need medical attention with skilled caretakers for recovery and support.</p>
              <div className="text-xl font-semibold text-blue-600 mb-6">700 BDT/day</div>
              <Link href="/service/sick-care" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block font-semibold">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-gray-600 mb-12 text-lg">Real experiences from real families</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 bg-gray-50 rounded-lg shadow-md">
              <div className="text-yellow-500 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 italic mb-6">"Excellent service! Found a reliable babysitter for my twins within hours. The caretaker was professional and my kids loved her. Highly recommend Care.IO!"</p>
              <div className="font-semibold text-gray-800">- Sarah Johnson</div>
              <div className="text-sm text-gray-500">Mother of 2</div>
            </div>
            <div className="p-8 bg-gray-50 rounded-lg shadow-md">
              <div className="text-yellow-500 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 italic mb-6">"The elderly care service has been a blessing for our family. The caretaker is patient, caring, and helps my mother with all her daily needs. Thank you!"</p>
              <div className="font-semibold text-gray-800">- Michael Chen</div>
              <div className="text-sm text-gray-500">Son of Elderly Care User</div>
            </div>
            <div className="p-8 bg-gray-50 rounded-lg shadow-md">
              <div className="text-yellow-500 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 italic mb-6">"After my surgery, I needed help at home. Care.IO provided a skilled caretaker who made my recovery much easier. Professional and compassionate!"</p>
              <div className="font-semibold text-gray-800">- Fatima Rahman</div>
              <div className="text-sm text-gray-500">Sick Care User</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
