'use client';
import { useRecoilValue } from 'recoil';
import userState from '@/app/atoms/userAtom';
import ErrorPage from '@/app/(main)/ErrorPage';

function Profile({ params }: { params: { username: string } }) {
  const userInfo = useRecoilValue(userState);
  const { username } = userInfo;

  if (params.username !== username) {
    return <ErrorPage />;
  }

  return (
    <div>
      <h1>{userInfo.name}'s PROFILE</h1>
    </div>
  );
}

export default Profile;
