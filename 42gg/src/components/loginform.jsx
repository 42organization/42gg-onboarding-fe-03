'use client';
import React from 'react';
import styles from '../styles/login.module.css';
import users from '../components/userinfo';
import { useSetRecoilState } from 'recoil';
import { authState } from '../atoms/authatoms';
import { useNavigate } from 'next/navigation';

function loginform() {
  const setAuthState = useSetRecoilState(authState);
  const navigate = useNavigate();

  function inputhandler(event) {
    event.preventDefault();
    const idSet = event.target[0].value;
    const pwSet = event.target[1].value;

    if (!idSet.length || !pwSet.length) {
      alert('id 또는 pw를 확인해주세요');
      return;
    }
    const matchedUser = users.find(
      (users) => users.id === idSet && users.pw === pwSet
    );
    if (matchedUser) {
      const userid = idSet.slice(0, idSet.indexOf('@'));
      setAuthState({
        isLoggedIn: true,
        userName: userid,
        userRole: matchedUser.role,
      });
      navigate('/Lobby');
    } else {
      alert('id 또는 pw를 확인해주세요');
    }
  }
  return (
    <>
      <form onSubmit={inputhandler}>
        <div>
          <label htmlFor='email' className={`${styles.emailcontainer}`}>
            Email address
          </label>
          <div className={styles.mt_2}>
            <input
              id='email'
              name='email'
              type='email'
              placeholder='Email Adress'
              className={`${styles.input_1} ${styles['sm:mx-auto']} ${styles['sm:leading-6']}`}
            />
          </div>
        </div>

        <div>
          <div className={styles.passwordlabelcontainer}>
            <label htmlFor='password' className={styles.passwordlabel}>
              Password
            </label>
          </div>
          <div className={styles.mt_2}>
            <input
              id='password'
              name='password'
              type='password'
              placeholder='PassWord'
              className={`${styles.input_1} ${styles['sm:mx-auto']} ${styles['sm:leading-6']}`}
            />
          </div>
        </div>
        <div className={styles.mt_2}>
          <button className={styles.btn}> Sign in </button>
        </div>
      </form>
    </>
  );
}

export default loginform;
