import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const loginState = atom({
  key: 'isLoggedIn',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export default loginState;
