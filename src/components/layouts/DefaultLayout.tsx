import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { logout } from '@/utils/login';
import styles from '@/styles/layout.module.scss';
import sideStyles from '@/styles/sidebar.module.scss';
import headerStyles from '@/styles/header.module.scss';
import { AccessType } from '@/types/accessType';
import { useUser } from '@/utils/hooks/useUser';
import { toast } from 'react-hot-toast';
import navigationData from '@/data/navigationData.json';
import Link from 'next/link';

type navigationItem = {
  path: string;
  name: string;
  accessLevel: AccessType;
};

type navigationData = navigationItem[];

export default function DefaultLayout(props: {
  children: React.ReactNode;
  auth: AccessType;
}) {
  const router = useRouter();
  const currentPath = router.pathname;
  const { user, loading, error, resetUser } = useUser();

  useEffect(() => {
    if (error) {
      toast('로그인이 필요한 페이지입니다.');
      router.push('/login');
    }
    if (user && user.role < props.auth) {
      toast('권한이 없는 페이지입니다.');
      router.push('/');
    }
  }, [error, user, props.auth, router]);

  if (error) {
    return null;
  }

  if (loading || !user) {
    return <div>loading...</div>;
  }

  if (user && user.role < props.auth) {
    return null;
  }

  const handleLogout = async () => {
    await logout();
    resetUser();
    router.push('/login');
  };

  return (
    <div className={styles.generalWrapper}>
      <header className={headerStyles.wrapper}>
        <div className={headerStyles.title}>Routing Practice</div>
        <button onClick={handleLogout} className={headerStyles.button}>
          Logout
        </button>
      </header>
      <nav className={sideStyles.wrapper}>
        <ul className={sideStyles.ulWrapper}>
          {navigationData
            .filter((item) => item.accessLevel <= user.role)
            .map((item) => (
              <li key={item.name}>
                <Link
                  className={
                    item.path === currentPath
                      ? sideStyles.currentLink
                      : sideStyles.link
                  }
                  href={item.path}
                >
                  {item.name}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
      <div className={styles.bodyWrapper}>{props.children}</div>
    </div>
  );
}
