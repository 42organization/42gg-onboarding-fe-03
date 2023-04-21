import Head from 'next/head'
import Axios from 'axios';
import { useEffect, useState } from "react";
import ItemList from "../src/component/ItemList";
import {Loader} from 'semantic-ui-react';

function Home() {
	const [list, setList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const API_URL =
	"http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

	function getData(){
		Axios.get(API_URL).then((res) => {
			//console.log(res.data);
			setList(res.data);
			setIsLoading(false);
		});
	}

	useEffect(() => {
		getData();
	}, []);
	
	return (
				<div>
					{/* <Top /> */}
					<Head>
						<title>HOME | Bookjeok Bookjeok</title>
						<meta name="description" content="홈입니다."></meta>
					</Head>
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
					)};
					{/* <Footer/> */}
				</div>
	);
}

export default Home;