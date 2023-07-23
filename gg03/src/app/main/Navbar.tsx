import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import loginState from '../atoms/loginAtom';
import userState from '../atoms/userAtom';
import './Navbar.scss';

function NavBar() {
  const resetLoginState = useResetRecoilState(loginState);
  const resetUserState = useResetRecoilState(userState);
  const isLoggedIn = useRecoilValue(loginState);

  let buttonText = 'SIGN OUT';
  //   if (!isLoggedIn) {
  //     buttonText = 'SIGN IN';
  //   }

  const router = useRouter();

  function handleLogOut() {
    localStorage.removeItem('user');
    resetLoginState();
    resetUserState();
    router.push('/');
  }

  return (
    <header>
      <nav className='nav-bar'>
        <ul>
          <li>
            <Link href='/main'>HOME</Link>
          </li>
          <li>
            <button type='button' onClick={handleLogOut}>
              {buttonText}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
