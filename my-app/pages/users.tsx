import UserList from "../src/component/UserList";
//import UserDetail from "./UserDetail";
//import Link from 'next/link';
import {useRouter} from "next/router";
import Axios from "axios";
import { useEffect } from "react";

function Users() {
	const router=useRouter();

	/* if (authFromLocalStorage === ""){

	} else {

	} */

	function checkLogin() {
		const authFromLocalStorage: string = JSON.parse(localStorage.getItem('auth') || '{}');
		if (authFromLocalStorage === "3" || authFromLocalStorage === "2")
		{
			alert("권한이 없습니다 user");
			return router.push('/');
		}
	}
	/* function checkLogin() {
		Axios.get("/api/isLogin").then((res) => {
			if (res.status === 200 && res.data.name) {

			} else {
				router.push('/')
			}
		})
	} */

	useEffect(() => {
		checkLogin();
	}, []);
	return (
		<>
			<UserList />
		</>
	);
	}

export default Users;