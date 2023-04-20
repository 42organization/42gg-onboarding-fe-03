import UserList from "../src/component/UserList";
//import UserDetail from "./UserDetail";
//import Link from 'next/link';
import {useRouter} from "next/router";

function Users() {
	const router=useRouter();

	const authFromLocalStorage: string = JSON.parse(localStorage.getItem('auth') || '{}');
	if (authFromLocalStorage === null){

	} else {

	}
	if (authFromLocalStorage === "3")
	{
		alert("권한이 없습니다 user");
		return router.push('/');
	}
	return (
		<>
			<UserList />
		</>
	);
	}

export default Users;