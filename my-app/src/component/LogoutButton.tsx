import {useSetRecoilState} from "recoil";
import authAtom from "./authatom"
import Button from '@mui/material/Button';
import {useRouter} from "next/router";

function LogoutButton() {
	const navigate = useRouter();
	const setAuth = useSetRecoilState(authAtom);

	const handleClick = () => {
		setAuth("");
		localStorage.setItem('auth', JSON.stringify(""));
		navigate.push('/login');
	};
	return <Button style={{background: '#fff2e5' ,color: '#d0936d', borderColor: '#d0936d'}} variant="outlined" onClick={handleClick}>Logout</Button>;
}

export default LogoutButton;