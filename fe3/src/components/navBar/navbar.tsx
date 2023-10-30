'use client'
import React, { useEffect } from 'react';
import Link from 'next/link'
import { useLoginState } from '@/hooks/useLoginState';
import { useRouter } from 'next/navigation';


const Navbar = () => {
  const [loginInfo, setLoginInfo] = useLoginState();
  const router = useRouter();
  
  const handleLogout = () => {
    setLoginInfo(null);
    document.cookie = "UID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "Urole=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
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
        <div>
          <Link href='/user' className='p-2 text-xl'>UserPage</Link>
          {loginInfo?.role === "admin" ? <Link href='/admin' className='p-2 text-xl'>AdminPage</Link> : <></> }
          <Link href={'/todoList/' + loginInfo?.id} className='p-2 text-xl'>todoList</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;