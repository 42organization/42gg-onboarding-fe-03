import React from 'react';
import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import styles from '../styles/default.module.css';

function Lobby() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className={styles.backgroundcolor}>HHHHIIIII</div>
    </div>
  );
}

export default Lobby;
