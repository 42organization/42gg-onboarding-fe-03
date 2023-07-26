import NextAuth from 'next-auth';
import FortyTwoProvider from 'next-auth/providers/42-school';
import CredentialsProvider from 'next-auth/providers/credentials';
import users from '../../../UserInfo';
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
            user.id === credentials?.username &&
            user.pw === credentials?.password
        );
        console.log(user);
        console.log(credentials);
        if (user) {
          return { id: user.id, name: user.name, auth: user.auth };
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
        if (user.email) {
          user.id = user.email.split('@')[0];
        }
        token.user = user;
      }
      console.log('token: ', token);
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as User;
      console.log('session: ', session);
      return session;
    },
  },
});

export { handler as GET, handler as POST };
