import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import User from '../types/User';

const { persistAtom } = recoilPersist();

const userState = atom<User>({
  key: 'userState',
  default: {
    id: '',
    name: '',
    auth: '',
    todo: [],
  },
  effects_UNSTABLE: [persistAtom],
});

export default userState;
