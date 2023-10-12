import React, { useRef, SyntheticEvent, ReactNode } from "react";
import { isNormal, isManager, isAdmin } from "./LoginAtom";
import { SetterOrUpdater, useSetRecoilState } from "recoil";
import { NextRouter, useRouter } from "next/router";
import axios from "axios";


function LoginInput(): ReactNode {
    const userId: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
    const userPw: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
    const setIsNormal: SetterOrUpdater<boolean> = useSetRecoilState(isNormal);
    const setIsManager: SetterOrUpdater<boolean> = useSetRecoilState(isManager);
    const setIsAdmin: SetterOrUpdater<boolean> = useSetRecoilState(isAdmin);
    const router: NextRouter = useRouter();

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const data = {
            id: userId.current?.value,
            pw: userPw.current?.value,
        }

        try {
            const response = await axios.post("http://localhost:3001/api/userLogin",
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                });
                if (response.data.login === 1) {
                    setIsNormal(true);
                    router.replace("/home");
                } else if (response.data.login === 2) {
                    setIsManager(true);
                    router.replace("/home");
                } else if (response.data.login === 3) {
                    setIsAdmin(true);
                    router.replace("/home");
                }
            } catch (error) {
                console.log("post 에러", error);
            }
        }
    
    return (
        <div className="loginBox">
            <form onSubmit={handleSubmit} className="loginInput">
                <div>
                    <label htmlFor="id">ID</label>
                    <input id="id" type="text" ref={userId}/>
                    <label htmlFor="pw">PASSWORD</label>
                    <input id="pw" type="password" ref={userPw}/>
                </div>
                <button type="submit" >로그인</button>
            </form>
        </div>
    )
}

export default LoginInput;