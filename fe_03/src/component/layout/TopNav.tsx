import React from "react";
import LogoutButton from "../LogoutButton";
import Link from "next/link";
import { isNormal, isManager, isAdmin } from "../LoginAtom";
import { useRecoilValue } from "recoil";

const TopNav = (): JSX.Element => {
    const isN: boolean = useRecoilValue<boolean>(isNormal);
    const isM: boolean = useRecoilValue<boolean>(isManager);
    const isA: boolean = useRecoilValue<boolean>(isAdmin);

    if (isN === true) {
        return (
            <header>
                <Link className="title" href="/home">
                    <h1>FE-03</h1>
                </Link>
                <nav>
                    <Link className="link" href="/home">홈</Link>
                    <Link className="link" href="/home/recommend-list">추천 목록</Link>
                    <Link className="link" href="/home/product-list">상품 목록</Link>
                    <Link className="link" href="/home/normal-setting">설정</Link>
                </nav>
                <LogoutButton />
            </header>
        )
    } else if (isM === true) {
        return (
            <header>
                <Link className="title" href="/home">
                        <h1>FE-03</h1>
                </Link>
                <nav>
                    <Link className="link" href="/home">홈</Link>
                    <Link className="link" href="/home/recommend-list">추천 목록</Link>
                    <Link className="link" href="/home/product-list">상품 목록</Link>
                    <Link className="link" href="/home/product-manage">상품 관리</Link>
                    <Link className="link" href="/home/normal-setting">설정</Link>
                </nav>
                <LogoutButton />
            </header>
        )
    } else if (isA === true) {
        return (
            <header>
                <Link className="title" href="/home">
                        <h1>FE-03</h1>
                </Link>
                <nav>
                    <Link className="link" href="/home">홈</Link>
                    <Link className="link" href="/home/recommend-list">추천 목록</Link>
                    <Link className="link" href="/home/product-list">상품 목록</Link>
                    <Link className="link" href="/home/product-manage">상품 관리</Link>
                    <Link className="link" href="/home/auth-manage">권한 관리</Link>
                    <Link className="link" href="/home/normal-setting">설정</Link>
                </nav>
                <LogoutButton />
            </header>
        )
    } else {
        return (
            <header>
                <Link className="title" href="/">
                    <h1>FE-03</h1>
                </Link>
            </header>
        )
    }
}

export default TopNav;