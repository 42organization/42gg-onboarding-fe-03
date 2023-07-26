import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
// import { useRecoilValue, useResetRecoilState } from 'recoil';
// import loginState from '../atoms/loginAtom';
// import userState from '../atoms/userAtom';
import SignButton from './SignButton';
import './Navbar.scss';

function NavBar() {
  //   const resetLoginState = useResetRecoilState(loginState);
  //   const resetUserState = useResetRecoilState(userState);
  //   const isLoggedIn = useRecoilValue(loginState);

  return (
    <header>
      <nav className='nav-bar'>
        <ul>
          <li>
            <Link href='/'>HOME</Link>
          </li>
          <li>
            <SignButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
