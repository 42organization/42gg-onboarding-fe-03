'use client';
import Link from 'next/link';
import './ErrorPage.scss';

function ErrorPage() {
  return (
    <div>
      <div className='main'>
        <h1>ERROR</h1>
        <p>요청하신 페이지를 찾을 수 없습니다!</p>
        <div className='link'>
          <Link href='/'>Go Home</Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
