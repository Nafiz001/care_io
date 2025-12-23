import Link from 'next/link'

export const metadata = {
  title: "Care.IO - Home",
  description: "Reliable and trusted care services for children, elderly, and family members. Book babysitting, elderly care, and special care services easily."
}

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Banner/Hero Section */}
      <section className="relative overflow-hidden flex items-center" style={{ minHeight: '70vh' }}>
        {/* Professional care services background image */}
        <div className="absolute inset-0 opacity-90" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=2000&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        
        {/* Modern gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="container mx-auto text-center px-4 relative z-10">
          <div className="animate-fade-in">
            <div className="mt-4 inline-block mb-4 px-6 py-2 bg-yellow-400/20 backdrop-blur-sm rounded-full border border-yellow-400/50">
              <span className="text-yellow-300 font-semibold text-sm tracking-wider">TRUSTED CARE SERVICES</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold  mb-6 text-blue-200 leading-tight">
              Professional Care for<br/>
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">Your Loved Ones</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto font-light leading-relaxed">
              Connect with verified and experienced caregivers for babysitting, elderly care, and medical assistance
            </p>
            
            <div className="flex flex-wrap gap-8 justify-center mb-10 text-white">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="font-medium">Verified Caregivers</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="font-medium">Instant Booking</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <Link href="#services" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-5 rounded-full font-bold text-xl hover:from-yellow-300 hover:to-orange-400 hover:scale-105 transition-all transform shadow-2xl hover:shadow-yellow-500/50">
                🚀 Explore Our Services
              </Link>
              <Link href="/register" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 px-10 py-5 rounded-full font-bold text-xl hover:bg-white/20 hover:scale-105 transition-all transform shadow-2xl">
                ✨ Get Started Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 bg-white">
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
