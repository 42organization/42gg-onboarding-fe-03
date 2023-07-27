import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import './Navbar.scss';
import SignOutButton from './SignOutButton';

function NavBar() {
  return (
    <header>
      <nav className='nav-bar'>
        <ul>
          <li>
            <Link href='/'>HOME</Link>
          </li>
          <li>
            <SignOutButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
