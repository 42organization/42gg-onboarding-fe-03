'use client'
import React, { ChangeEvent, useEffect } from 'react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import loginState from '@/Atom/loginState';
import { useRouter } from 'next/navigation';

const url = 'http://localhost:4000/user'; // 대상 URL

export default function page({children}: {children: React.ReactNode}) {
  const router = useRouter();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [inProcess, setInProcess] = useState(false);
  const [isLogined, setIslogin] = useRecoilState(loginState);
  let logined = false;

  useEffect(() => {
    if (isLogined != null) router.push('/');
  });

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePwChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const handleLogin = () => {
    const checkid = id;
    const checkpw = pw;
    setInProcess(true);

    fetch("http://localhost:9090/api/user")
      .then((response) => {
        if (!response.ok) {
          setInProcess(false);
          throw new Error('Network response was not ok');
        }
        return response.json(); // JSON 형태로 응답 데이터를 파싱
      })
      .then((data) => {
        for (let i = 0; i < data.length; ++i) {
          if (data[i].id === checkid && data[i].password === checkpw) {
            localStorage.setItem('isLogin', 'true');
            // setRole(data[i].role);
            logined = true;
            break;
          }
        }
        setInProcess(false);
        // if (!logined) window.alert('해당 계정이 없습니다.');
        // else navigate('/main');
      })
      .catch((error) => {
        setInProcess(false);
        console.error('Error:', error);
      });
  };

  return (
    <div className="flex flex-col items-center mt-5">
      <div className="mb-2 text-2xl">This is Login Page</div>
      <input
        className='p-4 mb-4 w-80'
        type="text"
        placeholder="ID"
        value={id}
        onChange={handleIdChange}
      />
      <input
        className='p-4 mb-4 w-80'
        type="password"
        placeholder="Password"
        value={pw}
        onChange={handlePwChange}
      />
      <button 
        onClick={handleLogin}
        disabled={inProcess}
        className='p-4 text-lg bg-[#3498db] text-white rounded-md cursor-pointer'
      >
        Login
      </button>
    </div>
  );
  }