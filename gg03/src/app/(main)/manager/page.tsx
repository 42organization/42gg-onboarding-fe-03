'use client';

import { useRecoilValue } from 'recoil';
import userState from '@/app/atoms/userAtom';
import ErrorPage from '@/app/(main)/ErrorPage';

function ManagerPage() {
  const authority = useRecoilValue(userState).auth;
  if (authority === 'normal') {
    return <ErrorPage />;
  }

  return (
    <div>
      <h1>MANAGER</h1>
    </div>
  );
}

export default ManagerPage;
