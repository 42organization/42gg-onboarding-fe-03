' use client ';
import React from 'react';
import  Link  from 'next/link'

const Navbar = () => {
  return (
    <nav>
    <div>
        <Link href='/main'>Main</Link>
      </div>
    </nav>
  );
};

export default Navbar;