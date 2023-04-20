import styles from '@/styles/header.module.scss';

export default function Header() {
  const handleLogout = () => {
    // logout();
    // resetUser();
    // router('/login');
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
