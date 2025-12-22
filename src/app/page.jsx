import Link from 'next/link'

export const metadata = {
  title: "Care.IO - Home",
  description: "Reliable and trusted care services for children, elderly, and family members. Book babysitting, elderly care, and special care services easily."
}

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Banner/Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2000&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.08"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '30px 30px'
        }}></div>
        <div className="container mx-auto text-center px-4 relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
              Care for Your Loved Ones
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-semibold">with Care.IO</p>
            <p className="text-xl md:text-2xl mb-8 font-light">Professional, Reliable, and Trusted Caregiving Services</p>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
              💙 Whether you need help with babysitting, elderly care, or special medical assistance,<br/>
              we connect you with verified and experienced caregivers who genuinely care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#services" className="bg-yellow-400 text-purple-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-yellow-300 hover:scale-105 transition transform shadow-2xl">
                🚀 Explore Our Services
              </Link>
              <Link href="/register" className="bg-white text-purple-600 border-2 border-white px-10 py-5 rounded-full font-bold text-xl hover:bg-opacity-90 hover:scale-105 transition transform shadow-2xl">
                📝 Get Started Free
              </Link>
            </div>
          </div>
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
            <div className="bg-white text-center p-8 border-2 border-purple-200 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 hover:border-purple-400">
              <div className="text-6xl mb-4 animate-bounce">👶</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-900">Baby Care</h3>
              <p className="text-gray-600 mb-6 min-h-[60px]">Professional babysitting services with trained caretakers who provide safe, fun, and nurturing care for your little ones.</p>
              <div className="text-2xl font-bold text-indigo-600 mb-6">500 BDT/day</div>
              <Link href="/service/baby-care" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-indigo-700 hover:to-purple-700 inline-block font-bold shadow-lg hover:shadow-xl transition">
                Learn More →
              </Link>
            </div>
            <div className="bg-white text-center p-8 border-2 border-purple-200 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 hover:border-purple-400">
              <div className="text-6xl mb-4 animate-bounce">👵</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-900">Elderly Care</h3>
              <p className="text-gray-600 mb-6 min-h-[60px]">Compassionate care for your elderly family members with assistance in daily activities and health monitoring.</p>
              <div className="text-2xl font-bold text-purple-600 mb-6">600 BDT/day</div>
              <Link href="/service/elderly-care" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full hover:from-purple-700 hover:to-pink-700 inline-block font-bold shadow-lg hover:shadow-xl transition">
                Learn More →
              </Link>
            </div>
            <div className="bg-white text-center p-8 border-2 border-purple-200 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 hover:border-purple-400">
              <div className="text-6xl mb-4 animate-bounce">🏥</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-900">Sick People Care</h3>
              <p className="text-gray-600 mb-6 min-h-[60px]">Specialized care for those who need medical attention with skilled caretakers for recovery and support.</p>
              <div className="text-2xl font-bold text-pink-600 mb-6">700 BDT/day</div>
              <Link href="/service/sick-care" className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-3 rounded-full hover:from-pink-700 hover:to-rose-700 inline-block font-bold shadow-lg hover:shadow-xl transition">
                Learn More →
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
