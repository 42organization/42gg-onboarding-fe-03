import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const userState = atom({
  key: 'auth',
  default: 'none',
  effects_UNSTABLE: [persistAtom],
});

export default userState;
