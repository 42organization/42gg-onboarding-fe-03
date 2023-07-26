'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import './LoginForm.scss';

function LoginForm() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredUsername = usernameRef.current!.value;
    const enteredPassword = passwordRef.current!.value;
    if (enteredUsername === '' || enteredPassword === '') {
      setErrorMessage('아이디와 비밀번호를 입력해주세요');
      return;
    }
    const result = await signIn('credentials', {
      username: enteredUsername,
      password: enteredPassword,
      redirect: false,
      callbackUrl: '/',
    });
    if (result?.error) {
      setErrorMessage('아이디와 비밀번호를 확인해주세요');
    } else if (result?.ok) {
      setErrorMessage('');
      await router.push('/');
    }
  }

  return (
    <div className='Login'>
      <h1>HELLO WORLD</h1>
      <form onSubmit={handleSubmit}>
        <div className='Input'>
          <div className='error-message'>{errorMessage}</div>
          <input
            className='input-box'
            ref={usernameRef}
            name='username'
            type='text'
            placeholder='username'
            autoComplete='off'
          />
          <input
            className='input-box'
            ref={passwordRef}
            name='password'
            type='password'
            placeholder='password'
            autoComplete='off'
          />
        </div>
        <div className='signin-buttons'>
          <button type='submit'>SIGN IN</button>
          <button
            type='button'
            onClick={() => signIn('42-school', { callbackUrl: '/' })}
          >
            SIGN IN with 42
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
