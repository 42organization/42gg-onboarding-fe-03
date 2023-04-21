import React from "react";
import styles from "../scss/style.module.scss";
import Button from '@mui/material/Button';
import { MouseEvent } from "react";
import {useRouter} from "next/router";

function Sidebar() {
	const router = useRouter();
	let activeItem;

	if (router.pathname === '/'){
		activeItem = "home";
	} else if (router.pathname === "/about") {
		activeItem = "about";
	} else if (router.pathname === "/product") {
		activeItem = "product";
	} else if (router.pathname === "/users") {
		activeItem = "users";
	} else if (router.pathname === "/login") {
		activeItem = "login";
	}
	
	function handleItemClick(e: MouseEvent<HTMLAnchorElement> | null, {name} : {name?: string}){
		if(name === 'home'){
		router.push('/');
		} else if(name === 'about'){
		router.push('/about');
		} else if(name === 'product'){
		router.push('/product');
		} else if(name === 'users'){
		router.push('/users');
		} else if(name === 'profile'){
		router.push('/profile');
		} else if(name === 'logout'){
			//setAuth("");
			//localStorage.setItem('auth', JSON.stringify(""));
			router.push('/login');
		}
	}
	return (
		<div className={styles.SidebarWrep}>
			<nav>
			<Button style={{color: '#d0936d'}} onClick={() => handleItemClick(null, {name: 'about'})} >About</Button>
			<Button style={{color: '#d0936d'}} onClick={() => handleItemClick(null, {name: 'home'})}>Menu</Button>
			<Button style={{color: '#d0936d'}} onClick={() => handleItemClick(null, {name: 'profile'})}>Profile</Button>
			<Button style={{background: '#fff2e5' ,color: '#d0936d', borderColor: '#d0936d'}} 
					variant="outlined" 
					onClick={() => handleItemClick(null, {name: 'logout'})}>Logout</Button>
			</nav>
		</div>
	);
}

export default Sidebar;