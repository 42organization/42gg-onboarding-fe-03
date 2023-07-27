'use client';
import './globals.scss';
import { RecoilRoot } from 'recoil';
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <SessionProvider>
        <html lang='ko'>
          <body>{children}</body>
        </html>
      </SessionProvider>
    </RecoilRoot>
  );
}
