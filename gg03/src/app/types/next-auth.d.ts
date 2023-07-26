import { Session } from 'inspector';
import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  export interface Session {
    user: {
      id: string;
      auth: string;
    } & DefaultSession['user'];
  }
}
