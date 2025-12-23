import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Large 404 with gradient */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            404
          </h1>
          <div className="text-6xl mb-4">😵</div>
        </div>

        {/* Error message */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            The page you're looking for seems to have wandered off. Don't worry, our care services are still here to help!
          </p>
        </div>

        {/* Action buttons */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            🏠 Return to Home
          </Link>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/service"
              className="inline-block bg-white text-gray-700 font-semibold px-6 py-3 rounded-xl border-2 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              📋 Browse Services
            </Link>
            <Link
              href="/my-bookings"
              className="inline-block bg-white text-gray-700 font-semibold px-6 py-3 rounded-xl border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              📅 My Bookings
            </Link>
          </div>
        </div>

        {/* Additional help text */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Need help? <Link href="/" className="text-indigo-600 hover:text-indigo-800 font-medium">Contact our support team</Link>
          </p>
        </div>
      </div>
    </div>
  )
}