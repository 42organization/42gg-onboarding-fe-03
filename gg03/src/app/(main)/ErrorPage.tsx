'use client';

import Link from 'next/link';
import '@/app/ErrorPage.scss';

function Error() {
  return (
    <div>
      <div className='main'>
        <h1>ERROR</h1>
        <p>잘못된 접근입니다!</p>
        <div className='link'>
          <Link href='/'>Go Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
