'use client';

import { signOut } from 'next-auth/react';
import { useResetRecoilState } from 'recoil';
import userState from '@/app/atoms/userAtom';

function SignOutButton() {
  const resetUserState = useResetRecoilState(userState);
  const handleSignOut = () => {
    resetUserState();
    signOut({ callbackUrl: 'http://localhost:3000/login' });
  };
  return (
    <button type='button' onClick={handleSignOut}>
      SIGN OUT
    </button>
  );
}

export default SignOutButton;
