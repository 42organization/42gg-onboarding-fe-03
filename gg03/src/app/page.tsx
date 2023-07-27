'use client';

import MainNavigation from './(main)/MainNavigation';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import useSetUserState from './hooks/useUserState';

export default function Home() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login?callbackUrl=/');
    },
  });
  useSetUserState(session);
  if (status === 'loading') {
    return <div>loading...</div>;
  }
  //   console.log('home session', session);

  return (
    <div>
      <MainNavigation />
      <h1>WELCOME!</h1>
    </div>
  );
}
