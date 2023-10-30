"use client";

import userState from "@/app/atom/userState";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import Link from "next/link";
import "../styles/NavBar.scss";

export default function NavBar() {
  const [isRendered, setIsRendered] = useState(false);
  const user = useRecoilValue(userState);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  return (
    <nav className="nav-bar">
      <Link href="/" className="nav-bar-link">
        Home
      </Link>
      <Link href="/about" className="nav-bar-link">
        About
      </Link>
      <Link href="/contact" className="nav-bar-link">
        Contact
      </Link>
      <Link
        href={isRendered ? "/todo/" + user.username : "/login"}
        className="nav-bar-link"
      >
        Todo
      </Link>
    </nav>
  );
}
