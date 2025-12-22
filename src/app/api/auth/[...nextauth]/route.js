import NextAuth from 'next-auth'
import { users } from '@/lib/users'

export const authOptions = {
  providers: [
    {
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const user = users.find(u => u.email === credentials.email && u.password === credentials.password)
        if (user) {
          return { id: user.id, name: user.name, email: user.email }
        }
        return null
      }
    },
    {
      id: 'google',
      name: 'Google',
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }