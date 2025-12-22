import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Care for Your Loved Ones with Care.IO</h1>
          <p className="text-xl mb-8">Reliable caregiving services for babies, elderly, and those in need.</p>
          <Link href="#services" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">Explore Services</Link>
        </div>
      </section>

      {/* About */}
      <section className="py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">About Care.IO</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">Our mission is to make caregiving easy, secure, and accessible for everyone. Find trusted caretakers for babysitting, elderly care, and special care services.</p>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border rounded-lg shadow hover:shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Baby Care</h3>
              <p className="text-gray-600 mb-4">Professional babysitting services for your little ones.</p>
              <Link href="/service/baby-care" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Learn More</Link>
            </div>
            <div className="text-center p-6 border rounded-lg shadow hover:shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Elderly Care</h3>
              <p className="text-gray-600 mb-4">Compassionate care for your elderly family members.</p>
              <Link href="/service/elderly-care" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Learn More</Link>
            </div>
            <div className="text-center p-6 border rounded-lg shadow hover:shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Sick People Care</h3>
              <p className="text-gray-600 mb-4">Specialized care for those who need medical attention.</p>
              <Link href="/service/sick-care" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-lg shadow">
              <p className="text-gray-600 italic">"Great service! Found a reliable babysitter quickly."</p>
              <p className="font-semibold mt-4">- Sarah Johnson</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <p className="text-gray-600 italic">"Excellent care for my elderly mother. Highly recommend."</p>
              <p className="font-semibold mt-4">- Michael Chen</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
