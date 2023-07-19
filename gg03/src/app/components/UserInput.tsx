import React, { useRef, useEffect } from 'react';

function UserInput({ invalidInput, invalidUser }) {
  const nameInputRef = useRef();
  const passwordInputRef = useRef();

  function checkError() {
    let errorMessage = '';
    if (invalidInput) {
      errorMessage = '아이디와 비밀번호를 입력해주세요.';
    } else if (invalidUser) {
      errorMessage = '아이디 혹은 비밀번호를 확인해주세요.';
    }
    return errorMessage;
  }

  useEffect(() => {
    nameInputRef.current.focus();
  }, [invalidInput, invalidUser]);

  return (
    <div className='Input'>
      <div className='error-message'>{checkError()}</div>
      <input
        className='input-box'
        ref={nameInputRef}
        name='username'
        type='text'
        placeholder='username'
        autoComplete='off'
      />
      <input
        className='input-box'
        ref={passwordInputRef}
        name='password'
        type='password'
        placeholder='password'
        autoComplete='off'
      />
    </div>
  );
}

export default UserInput;
