'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function Profile({ params }: { params: { userId: string } }) {
  //   const router = useRouter();

  //   useEffect(() => {
  //     if (status === 'unauthenticated') {
  //       router.push('/');
  //     }
  //   });

  return (
    <div>
      <h1>{params.userId}'s PROFILE</h1>
    </div>
  );
}

export default Profile;
