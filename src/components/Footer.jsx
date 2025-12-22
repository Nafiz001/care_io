import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Care.IO</h3>
            <p className="text-gray-400">Reliable and trusted care services for your loved ones.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="/my-bookings" className="text-gray-400 hover:text-white">My Bookings</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/service/baby-care" className="text-gray-400 hover:text-white">Baby Care</Link></li>
              <li><Link href="/service/elderly-care" className="text-gray-400 hover:text-white">Elderly Care</Link></li>
              <li><Link href="/service/sick-care" className="text-gray-400 hover:text-white">Sick People Care</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">Email: info@care.io</p>
            <p className="text-gray-400">Phone: +880 123 456 789</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Care.IO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}