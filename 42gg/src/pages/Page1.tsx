import React from 'react';
import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import { useRecoilValue } from 'recoil';
import { authState } from '../atoms/authatoms';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function pages1() {
  const { isLoggedIn } = useRecoilValue(authState);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/');
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default pages1;
