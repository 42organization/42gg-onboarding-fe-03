import { useRouter } from 'next/router';
import { login } from '@/utils/login';
import style from '../styles/login.module.scss';
import { FaUser, FaLock } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { loginResultType } from '@/types/loginType';

type loginForm = {
  username: string;
  password: string;
};

const Login = () => {
  const router = useRouter();

  async function loginSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (formData.get('username') && formData.get('password')) {
      const username = formData.get('username') as string;
      const password = formData.get('password') as string;
      const loginRes: loginResultType = await login(username, password);
      if (loginRes.result === 'success') {
        router.push('/');
      } else {
        toast(loginRes.msg);
      }
    } else {
      console.log('Please enter your username and password');
      toast('Please enter your username and password');
    }
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
