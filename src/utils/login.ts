import axios, { AxiosError } from 'axios';
import { loginResultType, loginType } from '@/types/loginType';

export const login = async (username: string, password: string) => {
  try {
    const res = await axios.post<loginResultType>('/api/login', {
      username,
      password,
    });
    return res.data;
  } catch (e: AxiosError | unknown) {
    if (axios.isAxiosError(e)) {
      return {
        result: 'fail' as loginType,
        msg: '아이디 또는 비밀번호가 일치하지 않습니다.',
      };
    } else {
      console.error(e);
      return {
        result: 'fail' as loginType,
        msg: '알 수 없는 오류가 발생했습니다.',
      };
    }
  }
};

export const logout = async () => {
  try {
    await axios.post('/api/logout', { withCredentials: true });
  } catch (e: AxiosError | unknown) {
    if (!axios.isAxiosError(e)) {
      console.error(e);
    }
  }
};
