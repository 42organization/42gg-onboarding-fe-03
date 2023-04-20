import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';

// NextPage 타입에 getLayout 함수 속성을 추가
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// AppProps 타입의 Component 속성을 NextPageWithLayout 타입으로 변경
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks');
}

export default function AppWithLayout({
  Component,
  pageProps,
}: AppPropsWithLayout) {
  // getLayout 함수가 존재하면 실행
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  // 없으면 그대로 레이아웃 없이 반환
  return <Component {...pageProps} />;
}
