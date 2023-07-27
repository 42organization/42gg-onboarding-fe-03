'use client';
import './todos.scss';
import { useRecoilValue } from 'recoil';
import GetTodos from './GetTodos';
import userState from '@/app/atoms/userAtom';
import ToDoList from './ToDoList';

function ToDoPage({ params }: { params: { username: string } }) {
  const userInfo = useRecoilValue(userState);

  return (
    <div>
      <h1>{`${userInfo.name}'s TO DO LIST`}</h1>
      <GetTodos />
      <ToDoList />
    </div>
  );
}

export default ToDoPage;
