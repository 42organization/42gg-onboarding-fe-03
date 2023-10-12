import { useEffect } from "react";
import { useRecoilState } from "recoil";
import authAtom from "../component/authatom";
import { useRouter } from "next/router";

function useRequireAuth() {
  const router = useRouter();
  const [auth, setAuth] = useRecoilState(authAtom);

  useEffect(() => {
    if (!auth) {
      setAuth("");
      localStorage.setItem('email', "");
      localStorage.setItem('name', "");
      localStorage.setItem('password', "");
      localStorage.setItem('auth', "");
      alert("로그인이 필요합니다.");
      router.push("/login");
    }
  }, [router, auth, setAuth]);
  return auth;
}

export default useRequireAuth;