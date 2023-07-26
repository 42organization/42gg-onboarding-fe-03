'use client';
import './MainNavigation';
import MainNavigation from './MainNavigation';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

function MainLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login?callbackUrl=/');
    },
  });

  console.log('main session', session);
  if (status === 'loading') {
    return <div>loading...</div>;
  }

  return (
    <section>
      <MainNavigation />
      {children}
    </section>
  );
}

export default MainLayout;
