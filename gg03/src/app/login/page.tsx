import React, { use, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';
import LoginForm from './LoginForm';
import loginState from '../loginAtom';
import '../styles.scss';

function LoginPage() {
  const isLoggedin = useRecoilValue(loginState);
  const router = useRouter();

  useEffect(() => {
    if (isLoggedin) {
      router.push('/main');
    }
  }, [isLoggedin]);

  return (
    <div className='main'>
      <h1>HELLO WORLD </h1>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
