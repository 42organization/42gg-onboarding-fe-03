' use client ';
import React from 'react';
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <div className='flex justify-between'>
        <>
          <Link href='/login' className='p-2 text-xl'>Login</Link>
        </>
        <>
          <Link href='/todoList' className='p-2 text-xl'>todoList</Link>
        </>
      </div>
    </nav>
  );
};

export default Navbar;