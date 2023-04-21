import {useEffect, useState } from "react";
//import { useNavigate  } from "react-router-dom";
import { useRecoilValue } from "recoil";
import authAtom from "./authatom";
import {useRouter} from 'next/router';
//import MainPage from './../MainPage';
//users에 접근권한
function PrivateRoute({ Component}:any) {
	const [component, setComponent ] = useState(null);
	const auth = useRecoilValue(authAtom);
	const Navigate = useRouter();

	useEffect(() => {
		if (auth === "2") {
			alert('접근 권한이 없습니다. :P');
			Navigate.push('/');
		} else {
			setComponent(Component());
		}
	}, []);
	return component;
}

export default PrivateRoute;