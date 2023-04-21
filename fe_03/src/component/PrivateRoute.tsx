import { isNormal, isManager, isAdmin } from "./LoginAtom";
import { useRecoilValue } from "recoil";
import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react";

export const withLogin = (): void => {
    const isN: boolean = useRecoilValue<boolean>(isNormal);
    const isM: boolean = useRecoilValue<boolean>(isManager);
    const isA: boolean = useRecoilValue<boolean>(isAdmin);
    const all: number = isN ? 1: (isM ? 2 : (isA ? 3 : 0));
    const router: NextRouter = useRouter();

    useEffect(() => {
        if (all === 0) {
            // alert("로그인이 필요한 페이지입니다.");
            router.push("/");
        }
    }, [isN, isM, isA, all]);
}


export const withoutLogin = (): void => {
    const isN: boolean = useRecoilValue<boolean>(isNormal);
    const isM: boolean = useRecoilValue<boolean>(isManager);
    const isA: boolean = useRecoilValue<boolean>(isAdmin);
    const all: number = isN ? 1: (isM ? 2 : (isA ? 3 : 0));
    const router: NextRouter = useRouter();

    useEffect(() => {
        if (all !== 0) {
            // alert("로그인한 사용자는 접근할 수 없는 페이지입니다.");
            router.push("/home");
        }
    }, [isN, isM, isA, all]);
}

export const withNormal = (): void => {
    const isN: boolean = useRecoilValue<boolean>(isNormal);
    const isM: boolean = useRecoilValue<boolean>(isManager);
    const isA: boolean = useRecoilValue<boolean>(isAdmin);
    const all: number = isN ? 1: (isM ? 2 : (isA ? 3 : 0));
    const router: NextRouter = useRouter();

    useEffect(() => {
        if (isN !== true) {
            if (all === 0) {
                // alert("로그인이 필요한 페이지입니다.");
                router.push("/");
            } else {
                // alert("권한이 필요합니다.");
                router.push("/home");
            }
        }
    }, [isN, isM, isA, all]);
}

export const withManager = (): void => {
    const isN: boolean = useRecoilValue<boolean>(isNormal);
    const isM: boolean = useRecoilValue<boolean>(isManager);
    const isA: boolean = useRecoilValue<boolean>(isAdmin);
    const all: number = isN ? 1: (isM ? 2 : (isA ? 3 : 0));
    const router: NextRouter = useRouter();

    useEffect(() => {
        if (isM !== true) {
            if (all === 0) {
                // alert("로그인이 필요한 페이지입니다.");
                router.push("/");
            } else {
                // alert("권한이 필요합니다.");
                router.push("/home");
            }
        }
    }, [isN, isM, isA, all]);
}

export const withAdmin = (): void => {
    const isN: boolean = useRecoilValue<boolean>(isNormal);
    const isM: boolean = useRecoilValue<boolean>(isManager);
    const isA: boolean = useRecoilValue<boolean>(isAdmin);
    const all: number = isN ? 1: (isM ? 2 : (isA ? 3 : 0));
    const router: NextRouter = useRouter();

    useEffect(() => {
        if (isA !== true) {
            if (all === 0) {
                // alert("로그인이 필요한 페이지입니다.");
                router.push("/");
            } else {
                // alert("권한이 필요합니다.");
                router.push("/home");
            }
        }
    }, [isN, isM, isA, all]);
}

export const withManagerAdmin = (): void => {
    const isN: boolean = useRecoilValue<boolean>(isNormal);
    const isM: boolean = useRecoilValue<boolean>(isManager);
    const isA: boolean = useRecoilValue<boolean>(isAdmin);
    const all: number = isN ? 1: (isM ? 2 : (isA ? 3 : 0));
    const router: NextRouter = useRouter();

    useEffect(() => {
        if (isM !== true && isA !== true) {
            if (all === 0) {
                // alert("로그인이 필요한 페이지입니다.");
                router.push("/");
            } else {
                // alert("권한이 필요합니다.");
                router.push("/home");
            }
        }
    }, [isN, isM, isA, all]);
}