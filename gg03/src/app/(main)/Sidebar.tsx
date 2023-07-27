'use client';
import Link from 'next/link';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { FaUser, FaListCheck, FaChartLine, FaGear } from 'react-icons/fa6';
import userState from '@/app/atoms/userAtom';
import './Sidebar.scss';

function SideBar() {
  const userInfo = useRecoilValue(userState);
  const userId = userInfo.username;
  const authority = userInfo.auth;

  return (
    <div className='side-bar'>
      <ul>
        <li>
          <Link href={`/profile/${userId}`}>
            <FaUser size='35' />
          </Link>
        </li>
        <li>
          <Link href={`/todos/${userId}`}>
            <FaListCheck size='35' />
          </Link>
        </li>
        {(authority === 'manager' || authority === 'admin') && (
          <li>
            <Link href='/manager'>
              <FaChartLine size='35' />
            </Link>
          </li>
        )}
        {authority === 'admin' && (
          <li>
            <Link href='/admin'>
              <FaGear size='35' />
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default SideBar;
