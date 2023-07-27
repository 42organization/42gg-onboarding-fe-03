import NextAuth from 'next-auth';
import FortyTwoProvider from 'next-auth/providers/42-school';
import CredentialsProvider from 'next-auth/providers/credentials';
import users from '@/app/UserInfo';
import User from '@/app/types/User';

const handler = NextAuth({
  providers: [
    FortyTwoProvider({
      clientId: process.env.FORTYTWO_CLIENT_ID as string,
      clientSecret: process.env.FORTYTWO_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'SIGN IN',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'username' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'password',
        },
      },
      async authorize(credentials) {
        const user = users.find(
          (user) =>
            user.username === credentials?.username &&
            user.password === credentials?.password
        );
        if (user) {
          return {
            id: user.id,
            username: user.username,
            name: user.name,
            auth: user.auth,
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        token.user = user;
      }
      //   console.log('token: ', token);
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as User;
      //   console.log('session: ', session);
      return session;
    },
  },
});

export { handler as GET, handler as POST };
