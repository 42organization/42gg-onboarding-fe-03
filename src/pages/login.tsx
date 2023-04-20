import { useRouter } from 'next/router';
import style from '../styles/login.module.scss';
import { FaUser, FaLock } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { loginResultType } from '@/types/loginType';

const Login = () => {
  const router = useRouter();

  async function loginSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');
    // const loginRes = await login(username, password);
    // if (loginRes.res === 'success') {
    //   router('/');
    //   return;
    // }
    // toast(loginRes.data.msg, { type: 'error' });
    return;
  }

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Login</h1>
      <form onSubmit={loginSubmitHandler} className={style.formWrapper}>
        <div className={style.inputWrapper}>
          <FaUser />
          <input type='text' name='username' placeholder='username' />
        </div>
        <div className={style.inputWrapper}>
          <FaLock />
          <input type='password' name='password' placeholder='password' />
        </div>
        <button type='submit'>Enter</button>
      </form>
    </div>
  );
};

export default Login;
