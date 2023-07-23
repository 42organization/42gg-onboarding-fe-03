'use client';
import './globals.scss';
import { RecoilRoot } from 'recoil';
import styles from './page.module.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <RecoilRoot>
        <body>{children}</body>
      </RecoilRoot>
    </html>
  );
}

// 기본 레이아웃
