import UserList from "../src/component/UserList";
import {useRouter} from "next/router";
import { useEffect } from "react";
import useRequireAuth from "@/src/hooks/useRequireAuth";

function Users() {
	const router=useRouter();

	function MyProtectedComponent() {
		const auth = useRequireAuth();
		console.log(auth);
	}

	MyProtectedComponent();

	useEffect(() => {
		const authFromLocalStorage: string = JSON.parse(localStorage.getItem('auth') || '{}');
		if (authFromLocalStorage === "3" || authFromLocalStorage === "2")
		{
			alert("권한이 없습니다 user");
			router.push('/');
		}
	}, [router]);
	
	return (
		<>
			<UserList />
		</>
	);
	}

export default Users;