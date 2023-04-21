import Link from 'next/link';
import { useRouter } from 'next/router';
import navigationData from '@/data/navigationData.json';
import { AccessType } from '@/types/accessType';
import styles from '@/styles/sidebar.module.scss';
import { useUser } from '@/utils/hooks/useUser';

type navigationItem = {
  path: string;
  name: string;
  accessLevel: AccessType;
};

type navigationData = navigationItem[];

type userType = {
  accessLevel: AccessType;
};

export default function SideBar() {
  const { user } = useUser();
  const router = useRouter();
  const currentPath = router.pathname;

  if (!user) return null; // ?

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.ulWrapper}>
        {navigationData
          .filter((item) => item.accessLevel <= user.role)
          .map((item) => (
            <li key={item.name}>
              <Link
                className={
                  item.path === currentPath ? styles.currentLink : styles.link
                }
                href={item.path}
              >
                {item.name}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}
