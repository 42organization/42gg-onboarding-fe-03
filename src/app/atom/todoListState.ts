import { atom } from "recoil";

interface TodoItemType {
  id: string;
  todo: string;
  isDone: boolean;
}

export const todoListState = atom<TodoItemType[]>({
  key: "todoListState",
  default: [],
});
