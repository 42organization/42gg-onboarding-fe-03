import React from "react";
import { isNormal, isManager, isAdmin } from "./LoginAtom";
import { SetterOrUpdater, useSetRecoilState } from "recoil";
import { NextRouter, useRouter } from "next/router";

const LogoutButton = (): JSX.Element => {
    const setIsNormal: SetterOrUpdater<boolean> = useSetRecoilState(isNormal);
    const setIsManager: SetterOrUpdater<boolean> = useSetRecoilState(isManager);
    const setIsAdmin: SetterOrUpdater<boolean> = useSetRecoilState(isAdmin);
    const router: NextRouter = useRouter();

    function ClickLogout (): void {
        setIsNormal(false);
        setIsManager(false);
        setIsAdmin(false);
        router.push("/");
    }

    return (
        <div className="logoutBtn">
            <button onClick={ClickLogout}>로그아웃</button>
        </div>
    )
}

export default LogoutButton;