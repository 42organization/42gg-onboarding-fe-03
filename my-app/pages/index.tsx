import Head from 'next/head'
import Axios from 'axios';
import { useEffect, useState } from "react";
//import ItemList from "../src/component/ItemList";
import {Loader} from 'semantic-ui-react';
//import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router';
import Footer from "../src/component/Footer";
import Top from "../src/component/Top";
import { useRecoilState } from "recoil";
import authAtom from "../src/component/authatom";
import useRequireAuth from "../src/hooks/useRequireAuth";

function Index() {
	const router = useRouter();
	//const [auth, setAuth] = useRecoilState(authAtom);
	function MyProtectedComponent() {
		const auth = useRequireAuth();
		console.log(auth);
	}

	MyProtectedComponent();
	return (
				<div>
					{/* <Top /> */}
						<h1>메인 페이지</h1>
					{/* <Footer /> */}
				</div>
	);
}

export default Index;