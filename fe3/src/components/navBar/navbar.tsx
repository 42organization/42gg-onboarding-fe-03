'use client';
import React, { useEffect } from 'react';
import Link from 'next/link'
import { useLoginState } from '@/hooks/useLoginState';
import { useRouter } from 'next/navigation';


const Navbar = () => {
  const [loginInfo, setLoginInfo] = useLoginState();
  const router = useRouter();
  
  const handleLogout = () => {
    setLoginInfo(null);
    router.push('/');
  }

  return (
    <nav>
      <div className='flex justify-between'>
        <>
          {loginInfo ? 
            <button onClick={handleLogout} className='p-2 text-xl'> Logout </button> :
            <Link href='/login' className='p-2 text-xl'>Login</Link>
          }
        </>
        <>
          <Link href={'/todoList/' + loginInfo?.id} className='p-2 text-xl'>todoList</Link>
        </>
      </div>
    </nav>
  );
};

export default Navbar;