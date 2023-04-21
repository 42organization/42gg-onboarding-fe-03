import React from "react";
import {useRouter} from 'next/router';

//json -> cookie로 변경
function Profile() {
	const router = useRouter();
	let authFromLocalStorage, email, password, name;

	if (typeof window !== 'undefined') {
		authFromLocalStorage= JSON.parse(localStorage.getItem('auth')  || '{}');
		email = JSON.parse(localStorage.getItem('email')  || '{}');
		password = JSON.parse(localStorage.getItem('password')  || '{}');
		name = JSON.parse(localStorage.getItem('name')  || '{}');
	}

	if (authFromLocalStorage === "2")
	{
		alert('권한이 없습니다. Profile')
		router.push('/');
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