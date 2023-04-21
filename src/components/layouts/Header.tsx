import { logout } from '@/utils/login';
import { useUser } from '@/utils/hooks/useUser';
import { useRouter } from 'next/router';
import styles from '@/styles/header.module.scss';

export default function Header() {
  const { resetUser } = useUser();
  const router = useRouter();
  const handleLogout = async () => {
    await logout();
    resetUser();
    router.push('/login');
  };
  return (
    <header className={styles.wrapper}>
      <div className={styles.title}>Routing Practice</div>
      <button onClick={handleLogout} className={styles.button}>
        Logout
      </button>
    </header>
  );
}
