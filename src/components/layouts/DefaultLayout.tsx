import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from './Header';
import SideBar from './SideBar';
import styles from '@/styles/layout.module.scss';
import { AccessType } from '@/types/accessType';
import { useUser } from '@/utils/hooks/useUser';
import { toast } from 'react-hot-toast';

export default function DefaultLayout(props: {
  children: React.ReactNode;
  auth: AccessType;
}) {
  const router = useRouter();
  const { user, loading, error } = useUser();

  useEffect(() => {
    if (error) {
      toast('로그인이 필요한 페이지입니다.');
    }
    if (user && user.role < props.auth) {
      toast('권한이 없는 페이지입니다.');
    }
  }, [error, user, props.auth]);

  if (error) {
    router.push('/login');
    return null;
  }

  if (loading) {
    return <div>loading...</div>;
  }

  if (user && user.role < props.auth) {
    router.push('/');
    return null;
  }

  return (
    <div className={styles.generalWrapper}>
      <Header />
      <SideBar />
      <div className={styles.bodyWrapper}>{props.children}</div>
    </div>
  );
}
