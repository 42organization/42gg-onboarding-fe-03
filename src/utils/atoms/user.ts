import { atom } from 'recoil';
import { userResponse } from '@/types/userType';
// import { v1 } from 'uuid';

export const userState = atom<userResponse | null>({
  key: `userState`,
  default: null,
});
