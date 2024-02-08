import React from 'react';
import styles from '../styles/login.module.css';
import Loginform from '../component/loginform';

function login() {
  return (
    <>
      <div className={styles.background}>
        <div className={`${styles.logincontainer}`}>
          <div>
            <h2 className={styles.logintext}>My TodoList</h2>
          </div>
          <div
            className={`${styles.inputcontainer} ${styles['sm:mx-auto']} ${styles['sm:w-full']} ${styles['sm:max-w-sm']}`}
          >
            <Loginform />
          </div>
        </div>
      </div>
    </>
  );
}

export default login;
