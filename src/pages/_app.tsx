// import '@/styles/globals.css';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import { RecoilRoot } from 'recoil';
import { Toaster } from 'react-hot-toast';

// NextPage 타입에 getLayout 함수 속성을 추가
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// AppProps 타입의 Component 속성을 NextPageWithLayout 타입으로 변경
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function AppWithLayout({
  Component,
  pageProps,
}: AppPropsWithLayout) {
  return (
    <RecoilRoot>
      <Toaster />
      {Component.getLayout ? (
        Component.getLayout(<Component {...pageProps} />)
      ) : (
        <Component {...pageProps} />
      )}
    </RecoilRoot>
  );
}
