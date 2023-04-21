import '@/styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import type { AppProps } from 'next/app';
import {RecoilRoot} from 'recoil';
import Footer from "../src/component/Footer";
import SideBar from "../src/component/SideBar";
import Top from "../src/component/Top";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

//globals css 적용하거나 레이아웃을 잡는다.
function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  //const [showHeader, setShowHeader] = useState(false);

	useEffect(() => {
		const authFromLocalStorage = JSON.parse(localStorage.getItem("auth") || "{}");
	
		// 로그인하지 않았다면 로그인 페이지로 이동
		if (!authFromLocalStorage) {
		  router.push("/login");
		}
	  }, [router]);

  return (
    //<RecoilRoot>
    <div>
      {router.pathname !== '/login' && <Top/>}
      {router.pathname !== '/login' && <SideBar/>}
          <Component {...pageProps} />
      {router.pathname !== '/login' && <Footer/>}
    </div>
    //</RecoilRoot>
  );
}

export default App;