import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import styles from '@/styles/layout.module.scss';

export default function DefaultLayout(props: { children: React.ReactNode }) {
  return (
    <div className={styles.generalWrapper}>
      <Header />
      <SideBar />
      <div className={styles.bodyWrapper}>{props.children}</div>
    </div>
  );
}
