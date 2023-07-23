import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import User from '../types/User';

const { persistAtom } = recoilPersist();

const userState = atom<User>({
  key: 'userState',
  default: {
    id: '',
    auth: 'none',
  },
  effects_UNSTABLE: [persistAtom],
});

export default userState;
