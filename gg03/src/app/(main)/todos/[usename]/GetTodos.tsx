import axios from 'axios';
import { useEffect } from 'react';
import ToDo from '@/app/types/ToDo';
import { toDoState } from '@/app/atoms/todoAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import userState from '@/app/atoms/userAtom';
import ToDoList from './page';

export default function GetTodos() {
  const userInfo = useRecoilValue(userState);
  const [todos, setTodos] = useRecoilState(toDoState);

  useEffect(() => {
    axios.get(`https://dummyjson.com/todos/user/${userInfo.id}`).then((res) => {
      setTodos(res.data.todos);
      console.log('getToDos', todos);
    });
  }, []);

  return <div>{/* <ToDoList todos={todos} /> */}</div>;
}
