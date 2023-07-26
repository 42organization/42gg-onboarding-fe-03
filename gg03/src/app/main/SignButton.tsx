'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

function SignButton() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <button type='button'>...</button>;
  } else if (status === 'authenticated') {
    console.log('*session', session);
    return (
      <button
        type='button'
        onClick={() => signOut({ callbackUrl: 'http://localhost:3000/login' })}
      >
        SIGN OUT
      </button>
    );
  }
  return (
    <button type='button' onClick={() => signIn()}>
      SIGN IN
    </button>
  );
}

export default SignButton;
