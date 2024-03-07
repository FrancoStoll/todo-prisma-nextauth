

import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // ...add more providers here

  ],
  // session: {
  //   strategy: 'jwt'
  // },
  // callbacks: {
  //   async signIn({ account, user, credentials, email, profile }) {


  //     return true
  //   },
  //   async jwt({ account, token, user, profile, session }) {

  //     return token

  //   },
  //   async session({ token, session, user }) {


  //     return session
  //   }
  // }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };