import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const loginState = atom<String | null>({
  key: 'isLoggedIn',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export default loginState;