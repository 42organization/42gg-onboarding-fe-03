'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { FaUser, FaListCheck, FaChartLine, FaGear } from 'react-icons/fa6';
import userState from '../atoms/userAtom';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import './Sidebar.scss';
import loadConfig from 'next/dist/server/config';

function SideBar() {
  //   const resetUserState = useResetRecoilState(userState);
  //   const authority = useRecoilValue(userState);
  const { data: session, status } = useSession();
  const router = useRouter();
  const userInfo = session?.user;

  if (!session) {
    return signIn();
  }
  //   if (status === 'loading') {
  //     return <div>loading...</div>;
  //   }

  //   useEffect(() => {
  //     if (status === 'unauthenticated') {
  //       router.push('/');
  //     }
  //   }, [status]);

  console.log('***session', session?.user);
  const userId = session!.user!.id;
  return (
    <div className='side-bar'>
      <ul>
        <li>
          <Link href={`/main/profile/${userId}`}>
            <FaUser size='35' />
          </Link>
        </li>
        <li>
          <Link href={`/main/todos/${userId}`}>
            <FaListCheck size='35' />
          </Link>
        </li>
        {/* {(authority === 'manager' || authority === 'admin') && ( */}
        <li>
          <Link href='/main/manager'>
            <FaChartLine size='35' />
          </Link>
        </li>
        {/* )} */}
        {/* {authority === 'admin' && ( */}
        <li>
          <Link href='/main/admin'>
            <FaGear size='35' />
          </Link>
        </li>
        {/* )} */}
      </ul>
    </div>
  );
}

export default SideBar;
