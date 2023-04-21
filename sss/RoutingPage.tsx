import {useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import authAtom from "./authatom";

function RoutingPage({ Component }:any) {
	const [component, setComponent ] = useState(null);
	const auth = useRecoilValue(authAtom);
	const Navigate = useRouter();

	useEffect(() => {
		const authFromLocalStorage = JSON.parse(localStorage.getItem('auth') || '{}');
		if (!authFromLocalStorage) {
			alert('접근 권한이 없습니다.:R');
			Navigate.push('/login');
		} else {
			setComponent(Component(auth));
		}
	}, [Component, Navigate, auth]);
	
	return component;
}

export default RoutingPage;