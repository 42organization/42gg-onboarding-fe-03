import React from 'react';
import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import { useRecoilValue } from 'recoil';
import { authState } from '../atoms/authatoms';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function admin() {
  const { isLoggedIn, userRole } = useRecoilValue(authState);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/');
    }
    console.log(userRole);
    if (userRole === 'guest' || userRole === 'manager') {
      router.push('/Lobby');
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default admin;
