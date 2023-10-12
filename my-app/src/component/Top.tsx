import { useEffect, useState } from 'react';
import Image from 'next/image';
import Gnb from './Gnb';
import GnbNormal from './GnbNormal'
import SideBar from "./SideBar";


function Top () {
	const [auth, setAuth] = useState('');

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('auth') || '{}');
		setAuth(data);
	}, []);

	return (
		<div>
			<div style={{ display: "flex"}}>
				<div style={{ flex: "0 0 0"}}>
					<Image
						src="/images/logo.png" 
						alt="logo" 
						width={80} 
						height={80}/>
				</div>
					<h1>Bookjeok Bookjeok</h1>
			</div>
				{auth === '3' ? <GnbNormal /> : <Gnb />}
		</div>
	);

}

export default Top;