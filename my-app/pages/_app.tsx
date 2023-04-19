import '@/styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import type { AppProps } from 'next/app';
import Footer from "../src/component/Footer";
import Top from "../src/component/Top";

//globals css 적용하거나 레이아웃을 잡는다.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
