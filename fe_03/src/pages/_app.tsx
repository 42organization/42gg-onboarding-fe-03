import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil';
import MyLayout from '@/component/layout/UserLayout';
import React from 'react';

const App = ({ Component, pageProps }: AppProps ) => {
  return (
    <RecoilRoot>
      <MyLayout>
        <Component {...pageProps} />
      </MyLayout>
    </RecoilRoot>
  )
}

export default App;