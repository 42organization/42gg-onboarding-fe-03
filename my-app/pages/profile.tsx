import React from "react";
import {useRouter} from 'next/router';

function Profile() {
	const router = useRouter();
	const authFromLocalStorage= JSON.parse(localStorage.getItem('auth')  || '{}');
	const email = JSON.parse(localStorage.getItem('email')  || '{}');
	const password = JSON.parse(localStorage.getItem('password')  || '{}');
	const name = JSON.parse(localStorage.getItem('name')  || '{}');
	if (authFromLocalStorage === "2")
	{
		alert('권한이 없습니다. Profile')
		return router.push('/');
	}

	return (
		<>
			<h1>Profile</h1>
			<dd>Email</dd>
			<dd>{email}</dd>
			<dt>Password</dt>
			<dd>{password}</dd>
			<dt>Name</dt>
			<dd>{name}</dd>
		</>
	);
}

export default Profile;