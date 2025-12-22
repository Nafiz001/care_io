import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { users } from '@/lib/users'

export const authOptions = {
  providers: [
    CredentialsProvider({
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
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      // For Google sign-in, automatically create user in our system if they don't exist
      if (account.provider === 'google') {
        const existingUser = users.find(u => u.email === user.email)
        if (!existingUser) {
          // Add new Google user to our users array
          const newUser = {
            id: Date.now().toString(),
            name: user.name,
            email: user.email,
            password: null, // Google users don't have password
            nid: '',
            contact: ''
          }
          users.push(newUser)
        }
      }
      return true
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id
      }
      // For Google users, find or assign ID
      if (account?.provider === 'google') {
        const dbUser = users.find(u => u.email === token.email)
        if (dbUser) {
          token.id = dbUser.id
        }
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id
      }
      return session
    }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }