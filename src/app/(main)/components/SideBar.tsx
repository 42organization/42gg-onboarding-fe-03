"use client";

import { useState, useEffect } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { GrLogout, GrUserManager } from "react-icons/gr";
import { HiOutlineUserCircle } from "react-icons/hi";
import { AiTwotoneSetting } from "react-icons/ai";
import { RiAdminFill } from "react-icons/ri";
import userState from "../../atom/userState";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "../styles/SideBar.scss";

export default function SideBar() {
  const router = useRouter();
  const user = useRecoilValue(userState);
  const resetUserState = useResetRecoilState(userState);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  useEffect(() => {
    if (!user.isLoggedIn) {
      router.push("/login");
    }
  }, [user]);

  function logoutHandler() {
    resetUserState();
    document.cookie = "token" + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }

  const auth = user.auth;

  return (
    <div className="side-bar">
      <GrLogout
        className="side-bar-icon"
        size={35}
        onClick={logoutHandler}
        title="로그아웃"
      />
      {isRendered && (
        <>
          {auth === "manager" && (
            <Link href="/manage">
              <GrUserManager
                className="side-bar-icon"
                size={35}
                title="매니저 페이지"
              />
            </Link>
          )}
          {auth === "admin" ? (
            <Link href="/admin">
              <RiAdminFill
                className="side-bar-icon"
                size={35}
                title="관리자 페이지"
              />
            </Link>
          ) : (
            <Link href="/mypage">
              <HiOutlineUserCircle
                className="side-bar-icon"
                size={35}
                title="마이 페이지"
              />
            </Link>
          )}
        </>
      )}
      <Link href="/setting">
        <AiTwotoneSetting className="side-bar-icon" size={35} title="세팅" />
      </Link>
    </div>
  );
}
