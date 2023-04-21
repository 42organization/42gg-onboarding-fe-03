import axios from 'axios';
import { loginResultType, loginType } from '@/types/loginType';

export const login = async (username: string, password: string) => {
  try {
    const res = await axios.post<loginResultType>('/api/login', {
      username,
      password,
    });
    return res.data;
  } catch (e) {
    return {
      result: 'fail' as loginType,
      msg: '아이디 또는 비밀번호가 일치하지 않습니다.',
    };
  }
};

export const logout = async () => {
  try {
    await axios.post('/api/logout', { withCredentials: true });
  } catch (e) {
    console.error(e);
  }
};
