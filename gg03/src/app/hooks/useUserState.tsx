import { Session } from 'next-auth';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import userState from '@/app/atoms/userAtom';

const useSetUserState = (session: Session | null) => {
  const [isInit, setIsInit] = useState(true);
  const setUserInfo = useSetRecoilState(userState);

  useEffect(() => {
    if (session && isInit) {
      setIsInit(false);
      setUserInfo({
        id:
          typeof session.user.id === 'string'
            ? parseInt(session.user.id)
            : session.user.id,
        username: session.user.username || session.user.email.split('@')[0],
        name: session.user.name!,
        auth: session.user.auth || 'normal',
      });
    }
  }, [session, isInit, setUserInfo]);
};

export default useSetUserState;
