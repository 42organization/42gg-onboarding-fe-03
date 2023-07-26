'use client';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, redirect } from 'next/navigation';

function Profile({ params }: { params: { userId: string } }) {
  // parms.userId가 session.user.id와 같지 않으면 redirect 필요함

  //   const { data: session, status } = useSession({
  //     required: true,
  //     onUnauthenticated() {
  //       redirect(`/login?callbackUrl=/main/profile/${params.userId}`);
  //     },
  //   });

  //   if (status === 'loading') {
  //     return <div>loading...</div>;
  //   }
  //   console.log('profile session', session);
  return (
    <div>
      <h1>{params.userId}'s PROFILE</h1>
    </div>
  );
}

export default Profile;
