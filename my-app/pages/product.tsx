//import Head from 'next/head'
import Axios from 'axios';
import { useEffect, useState } from "react";
import {useRouter} from 'next/router';
import ItemList from "../src/component/ItemList";
import {Loader} from 'semantic-ui-react';
//import styles from '@/styles/Home.module.css'
import { useRecoilState } from "recoil";
import authAtom from "../src/component/authatom";
import useRequireAuth from '@/src/hooks/useRequireAuth';

function Product() {
	const [list, setList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();
	const [auth, setAuth] = useRecoilState(authAtom);

	const API_URL =
	"http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

	function getData(){
		Axios.get(API_URL).then((res) => {
			//console.log(res.data);
			setList(res.data);
			setIsLoading(false);
		});
	}

	function MyProtectedComponent() {
		const auth = useRequireAuth();
		console.log(auth);
	}

	MyProtectedComponent();

	useEffect(() => {
		getData();
	}, []);
	
	return (
				<div>
					{isLoading && (
							<div style={{ padding: "300px 0"}}>
								<Loader inline="centered" active>
									Loading
								</Loader>
							</div>
					)}
					{!isLoading && (
						<>
							<h3 style={{paddingTop: 40}}>베스트 셀러</h3>
							<hr />
							<ItemList list={list.slice(0, 9)} />
							<h3 style={{paddingTop: 40}}> 신상품 </h3>
							<hr />
							<ItemList list={list.slice(9)}/>
						</>
					)}
				</div>
	);
}

export default Product;


/* function Product() {

	return (
		<div>
			<h1>
				Product
			</h1>
		</div>
	);
}

export default Product; */