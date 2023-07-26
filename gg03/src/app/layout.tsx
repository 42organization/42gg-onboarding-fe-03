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
    <html lang='ko'>
      <body>
        <RecoilRoot>
          <SessionProvider>{children}</SessionProvider>
        </RecoilRoot>
      </body>
    </html>
  );
}

// 기본 레이아웃
