import React from "react";
import data from "../../data.json";
import {useRouter} from 'next/router';

type User = {
	email:string;
	name:string;
}

function UserDetail() {
	const router = useRouter();
	const { username } = router.query;

	const users: User[] = data.users;
	const user = users.find((u) => u.email === username);

	if (!user) {
		return <div>User not found.</div>;
	}
	
	return (
		<>
			<h2>User Detail</h2>
			<dt>email</dt>
			<dd>{user.email}</dd>
			<dt>name</dt>
			<dd>{user.name}</dd>
			<button onClick={() => router.back()}>Back</button>
		</>
	);
}

export default UserDetail;