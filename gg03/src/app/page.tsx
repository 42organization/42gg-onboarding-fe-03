'use client';

import { use, useEffect, useState } from 'react';
import MainNavigation from './main/MainNavigation';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useRecoilState } from 'recoil';
import userState from './atoms/userAtom';
import useSetUserState from './hooks/useUserState';

export default function Home() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login?callbackUrl=/');
    },
  });
  useSetUserState(session);
  // session 정보를 userState에 저장 -> custom hook 만들어서 사용
  //   const [userInfo, setUserInfo] = useRecoilState(userState);
  //   const [isInit, setIsInit] = useState(true);
  //   useEffect(() => {
  //     if (session && isInit) {
  //       setIsInit(false);
  //       setUserInfo({
  //         id: session!.user!.id,
  //         name: session!.user!.name as string,
  //         auth: session!.user!.auth ? session!.user!.auth : 'normal',
  //         todo: [],
  //       });
  //     }
  //   }, [session, isInit]);

  if (status === 'loading') {
    return <div>loading...</div>;
  }
  console.log('home session', session);

  return (
    <div>
      <MainNavigation />
      <h1>WELCOME!</h1>
    </div>
  );
}
