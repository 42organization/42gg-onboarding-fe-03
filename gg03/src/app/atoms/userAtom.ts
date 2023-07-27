import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import User from '@/app/types/User';

const { persistAtom } = recoilPersist();

const userState = atom<User>({
  key: 'userState',
  default: {
    id: -1,
    username: '',
    name: '',
    auth: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export default userState;
