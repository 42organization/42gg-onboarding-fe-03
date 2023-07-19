import React from 'react';
import '../components/MainNavigation';
import MainNavigation from '../components/MainNavigation';

function MainLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <MainNavigation />
      {children}
    </section>
  );
}

export default MainLayout;
