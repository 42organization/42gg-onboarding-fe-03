import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export interface loginStateInterface {
  id: string,
  role: string,
};

const loginState = atom<loginStateInterface | null>({
  key: 'isLoggedIn',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export default loginState;