'use client';
import React from 'react';
import styles from '../styles/sidebar.module.css';
import Image from 'next/image';
import Admin from '@/assets/admin.svg';
import Checklist from '@/assets/checklist.svg';
import Home from '@/assets/home.svg';
import { useRecoilValue } from 'recoil';
import { authState } from '../atoms/authatoms';
import { useRouter } from 'next/router';

function sidebar() {
  const { userName } = useRecoilValue(authState);
  const router = useRouter();

  function moveToRoute(route) {
    router.push(route);
  }

  return (
    <div className={styles.container}>
      <nav>
        <div className={styles.title}>{userName}</div>
        <ul className={styles.ullist}>
          <li className={styles.lilist} onClick={() => moveToRoute('/Lobby')}>
            <div>
              <Image src={Home} />
              <span className={styles.te}>Lobby</span>
            </div>
          </li>
          <li className={styles.lilist} onClick={() => moveToRoute('/Page1')}>
            <div>
              <Image src={Checklist} />
              <span className={styles.te}>Page1</span>
            </div>
          </li>
          <li className={styles.lilist} onClick={() => moveToRoute('/Page2')}>
            <div>
              <Image src={Checklist} />
              <span className={styles.te}>Page2</span>
            </div>
          </li>
          <li className={styles.lilist} onClick={() => moveToRoute('/Admin')}>
            <div>
              <Image src={Admin} />
              <span className={styles.te}>Admin</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default sidebar;
