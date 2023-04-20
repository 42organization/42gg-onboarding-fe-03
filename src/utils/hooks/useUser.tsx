import { useState, useEffect } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import axios from 'axios';
import { userState } from '../atoms/user';
import { userResponse } from '@/types/userType';

export function useUser() {
  const [user, setUser] = useRecoilState(userState);
  const resetUser = useResetRecoilState(userState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (user) {
      return;
    }
    const getUser = async () => {
      try {
        const { data } = await axios.get<userResponse>('/api/user');
        setUser(data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    getUser();
  }, [user, setUser]);

  return { user, loading, error, resetUser };
}
