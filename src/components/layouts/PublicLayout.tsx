import React from 'react';
import styles from '@/styles/layout.module.scss';

export default function PublicLayout(props: { children: React.ReactNode }) {
  return (
    <div className={styles.generalWrapper}>
      <div className={styles.publicWrapper}>{props.children}</div>
    </div>
  );
}
