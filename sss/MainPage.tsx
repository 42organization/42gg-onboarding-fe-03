//import { Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/home";
import About from "../../pages/about";
import Users from "../../pages/users";
import LoginForm from './loginform';
import Profile from '../../pages/profile';
import PrivateRoute from './PrivateRoute';
import Sidebar from './SideBar';
import Button from '@mui/material/Button';
import styles from '../scss/navbar.module.scss';
import Link from 'next/link';
import {Router, useRouter} from "next/router";

function Header() {
	return (
		<header>
		<nav className={styles.nav_item}>
				<Link href="/" className={styles.Home}>
					<Button style={{color: '#d0936d'}}>Bookjeok Bookjeok</Button>
				</Link>
				<Link href="/about">
					<Button style={{color: '#d0936d'}}>About</Button>
				</Link>
				<Link href="/users">
					<Button style={{color: '#d0936d'}}>Users</Button>
				</Link>
				<Link href="/Profile">
					<Button style={{color: '#d0936d'}}>Profile</Button>
				</Link>
		</nav>
		</header>
	);
}

/* function Body() {
	const users = () => {
		return <Users />;
	};
	return (
			<Routes className={styles.bodypage}>
				<Route path="/*" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/users/*" element={<PrivateRoute Component={users} />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/login" element={<LoginForm />}/>
			</Routes>
	)
} */


function MainPage() {
	const router = useRouter();
	const authFromLocalStorage = JSON.parse(localStorage.getItem('auth') || '{}');
	if (!authFromLocalStorage)
		return router.push('/login');

	return (
		<div className='MainWrep'>
			<Sidebar />
			<div className={styles.ContentWrep}>
				<Header />
				<hr />
				{/* <Body /> */}
			</div>
		</div>
	);
}

export default MainPage;
