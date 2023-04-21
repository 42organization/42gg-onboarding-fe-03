import Head from 'next/head'
import Axios from 'axios';
import { useEffect, useState } from "react";
//import ItemList from "../src/component/ItemList";
import {Loader} from 'semantic-ui-react';
//import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router';
import Footer from "../src/component/Footer";
import Top from "../src/component/Top";

function Index() {
	return (
				<div>
					{/* <Top /> */}
						<h1>메인 페이지</h1>
					{/* <Footer /> */}
				</div>
	);
}

export default Index;