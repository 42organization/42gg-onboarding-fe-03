'use client';

import MainNavigation from './main/MainNavigation';
import { signIn, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>loading...</div>;
  } else if (status === 'unauthenticated') {
    return <div>{signIn()}</div>;
  }

  return (
    <div>
      <MainNavigation />
      <h1>WELCOME!</h1>
    </div>
  );
}
