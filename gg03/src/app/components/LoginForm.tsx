import React, { useState } from 'react';
import { useRouter } from 'next/router';
// import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import UserInput from './UserInput';
import HandleButton from './HandleButton';
import users from '../UserInfo';
import loginState from '../loginAtom';
import userState from '../userAtom';
import './LoginForm.scss';

function LoginForm() {
  const [validInput, setValidInput] = useState(false);
  const [inputTouched, setInputTouched] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const [userAuth, setUserAuth] = useRecoilState(userState);
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredUser = event.target[0].value;
    const enteredPassword = event.target[1].value;
    setInputTouched(true);
    if (!enteredUser.trim().length || !enteredPassword.length) {
      setValidInput(false);
      return;
    }
    setValidInput(true);
    const loggedInUser = users.filter(
      (user) => user.id === enteredUser && user.pw === enteredPassword
    );
    if (!loggedInUser.length) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
      const user = JSON.stringify(loggedInUser[0], ['id', 'auth']);
      setUserAuth(loggedInUser[0].auth);
      localStorage.setItem('user', user);
      router.push('/main');
    }
  }

  const invalidInput = !validInput && inputTouched;
  const invalidUser = !isLoggedIn && inputTouched;

  return (
    <div className='Login'>
      <form onSubmit={handleSubmit}>
        <UserInput invalidInput={invalidInput} invalidUser={invalidUser} />
        <HandleButton />
      </form>
    </div>
  );
}

export default LoginForm;
