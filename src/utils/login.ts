import axios from 'axios';
import { loginResultType } from '@/types/loginType';

export const login = async (username: string, password: string) => {
  const res = await axios.post<loginResultType>('/api/login', {
    username,
    password,
  });
  return res.data;
};

export const logout = async () => {
  try {
    await axios.post('/api/logout');
  } catch (e) {
    console.error(e);
  }
};
