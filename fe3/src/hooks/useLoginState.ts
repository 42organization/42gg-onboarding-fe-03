import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import loginState from "@/Atom/loginState";

const defaultValue = {id: "", role:"guest"};

export function useLoginState() {
    const [isInitial, setIsInitial] = useState(true);
    const [loginInfo, setLoginInfo] = useRecoilState(loginState);

    useEffect(() => {
        setIsInitial(false);
    }, []);

    return [isInitial ? defaultValue: loginInfo, setLoginInfo] as const;
}