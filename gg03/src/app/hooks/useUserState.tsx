import { Session } from 'next-auth';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import userState from '../atoms/userAtom';

const useSetUserState = (session: Session | null) => {
  const [isInit, setIsInit] = useState(true);
  const setUserInfo = useSetRecoilState(userState);

  useEffect(() => {
    if (session && isInit) {
      setIsInit(false);
      setUserInfo({
        id: session.user.id,
        name: session.user.name!,
        auth: session.user.auth || 'normal',
        todo: [],
      });
    }
  }, [session, isInit, setUserInfo]);
};

export default useSetUserState;
