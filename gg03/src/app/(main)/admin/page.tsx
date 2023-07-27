'use client';
import { useRecoilValue } from 'recoil';
import userState from '@/app/atoms/userAtom';
import ErrorPage from '@/app/(main)/ErrorPage';

function AdminPage() {
  const authority = useRecoilValue(userState).auth;
  if (authority !== 'admin') {
    return <ErrorPage />;
  }
  return (
    <div>
      <h1>ADMIN</h1>
    </div>
  );
}

export default AdminPage;
