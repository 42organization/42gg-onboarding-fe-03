import React from 'react';
import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import styles from '../styles/default.module.css';
import { useRecoilValue } from 'recoil';
import { authState } from '../atoms/authatoms';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Lobby() {
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
      <div className={styles.backgroundcolor}>HHHHIIIII</div>
    </div>
  );
}

export default Lobby;
