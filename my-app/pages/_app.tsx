import '@/styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import Footer from "../src/component/Footer";
import SideBar from "../src/component/SideBar";
import Top from "../src/component/Top";
import { useRouter } from 'next/router';
import styles from '../src/scss/App.module.scss';

//globals css 적용하거나 레이아웃을 잡는다.
function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  //const [showHeader, setShowHeader] = useState(false);
  return (
    <RecoilRoot>
      <div className={styles.AppWrep}>
        {router.pathname !== '/login' && <Top/>}
{/*         {router.pathname !== '/login' && <SideBar/>}
 */}          <Component {...pageProps} />
        {router.pathname !== '/login' && <Footer/>}
      </div>
    </RecoilRoot>
  );
}

export default App;