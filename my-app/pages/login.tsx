	import React, {useState, useEffect} from 'react';
	import {useRouter} from 'next/router';
	//import { useRecoilState } from "recoil";
	//import authAtom from "./authatom";
	import users from '../data.json';
	import Button from '@mui/material/Button';
	import TextField from '@mui/material/TextField';
	import Box from '@mui/material/Box';

	function LoginForm() {
		const [email, setEmail] = useState('');
		const [password, setPassword] = useState('');
		const Navigate = useRouter();
		//const [auth, setAuth] = useRecoilState(authAtom);

		const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
			event.preventDefault();
		
			try {
				const user = users.users.find(user => user.email === email && user.password === password);
				if (user) {
					localStorage.setItem('auth', JSON.stringify(user.authority));
					localStorage.setItem('email', JSON.stringify(user.email));
					localStorage.setItem('password', JSON.stringify(user.password));
					localStorage.setItem('name', JSON.stringify(user.name));
					Navigate.push('/');
				}
				else
					throw null;
			} catch (error) {
				alert('로그인에 실패했습니다.');
				setEmail('');
				setPassword('');
			}
		};

		useEffect(() => {
			const auth = localStorage.getItem("auth");
			if (auth === "") {
				Navigate.push("/");
			}
		}, [Navigate]);
		
		return (
			<div>
				<Box
						sx={{
						marginTop: 20,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						}}>
				<h2>Bookjeok Bookjeok</h2>
				<form onSubmit={handleLogin}>
					<div>
						<TextField label="Email" 
									required
									fullWidth
									name="email"
									autoComplete="email"
									autoFocus
									margin="normal"
									onChange={(event) => setEmail(event.target.value)}
									></TextField>
					</div>
					<div>
						<TextField label="password" 
									required
									fullWidth
									name="password"
									type="password"
									id="password"
									autoComplete="current-password"
									margin="normal"
									onChange={(event) => setPassword(event.target.value)} 
									></TextField>
					</div>
					<Button type="submit"
							fullWidth variant="contained"
							sx={{mt: 3}}
							>Sign in</Button>
				</form>
					</Box>
			</div>
		);
	}

	export default LoginForm