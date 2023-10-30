"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/navigation";
// import { signIn } from "next-auth/react";
import userState from "../atom/userState";
import "./styles/LoginPage.scss";

export default function LoginPage() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [isIdEmpty, setIsIdEmpty] = useState(false);
  const [isPwEmpty, setIsPwEmpty] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [userStateValue, setUserStateValue] = useRecoilState(userState);

  function idChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setId(event.target.value);
  }

  function pwChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setPw(event.target.value);
  }

  async function loginHandler(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (id === "") {
      setIsIdEmpty(true);
      return;
    }
    setIsIdEmpty(false);
    if (pw === "") {
      setIsPwEmpty(true);
      return;
    }
    setIsPwEmpty(false);
    // const result = await signIn("credentials", {
    //   username: id,
    //   password: pw,
    // });
    // if (result?.ok) {
    //   setUserStateValue(result);
    //   router.push("/");
    // } else {
    //   setIsValid(false);
    // }
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: id, password: pw }),
      });
      if (response.ok) {
        const responseBody = await response.json();
        const newUser = {
          username: responseBody.username,
          auth: responseBody.role,
          isLoggedIn: true,
        };
        setUserStateValue(newUser);
        console.log(responseBody.message);
      } else {
        const errorData = await response.json();
        console.error(errorData.errorMessage);
        setIsValid(false);
      }
    } catch (error) {
      console.error("A network error occurred", error);
    }
  }

  useEffect(() => {
    if (userStateValue.isLoggedIn) {
      router.push("/");
    }
  }, [userStateValue]);

  return (
    <div className="login-page">
      <h2>Sign in to FE-03</h2>
      <form onSubmit={loginHandler}>
        <div className="inputs-wrapper">
          <div className="input-group">
            ID
            <input
              id="userIdInput"
              type="text"
              placeholder="아이디를 입력하세요."
              onChange={idChangeHandler}
              autoComplete="username"
            />
          </div>
          <div className="input-group">
            PW
            <input
              id="userPwInput"
              type="password"
              placeholder="비밀번호를 입력하세요."
              onChange={pwChangeHandler}
              autoComplete="current-password"
            />
          </div>
        </div>
        <button type="submit">로그인</button>
      </form>
      <div className="error-message">
        {!isIdEmpty &&
          !isPwEmpty &&
          !isValid &&
          "아이디 혹은 패스워드가 일치하지 않습니다."}
        {isIdEmpty && "아이디를 입력해주세요."}
        {!isIdEmpty && isPwEmpty && "비밀번호를 입력해주세요."}
      </div>
    </div>
  );
}
