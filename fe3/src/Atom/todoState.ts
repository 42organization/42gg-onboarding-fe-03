import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export interface todoStateInterface {
  todo: string[],
  completed: boolean[],
};

const todoState = atom<todoStateInterface | null>({
  key: 'todoList',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export default todoState;