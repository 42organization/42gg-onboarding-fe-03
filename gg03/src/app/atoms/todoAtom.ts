import { atom } from 'recoil';
import ToDo from '@/app/types/ToDo';

export const toDoState = atom<ToDo[]>({
  key: 'toDoState',
  default: [],
});
