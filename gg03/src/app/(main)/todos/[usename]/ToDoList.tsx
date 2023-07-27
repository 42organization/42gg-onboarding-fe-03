'use client';
import React, { useRef, useEffect } from 'react';
import axios from 'axios';
import { FaSquareCheck, FaTrash } from 'react-icons/fa6';
import './todos.scss';
import { useRecoilState } from 'recoil';
import { toDoState } from '@/app/atoms/todoAtom';
import { useRecoilValue } from 'recoil';
import userState from '@/app/atoms/userAtom';

function ToDoList() {
  const userInfo = useRecoilValue(userState);
  const [todos, setTodos] = useRecoilState(toDoState);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  });

  async function AddTodo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const input = inputRef.current!.value;
    if (input.trim().length) {
      await axios
        .post('https://dummyjson.com/todos/add', {
          todo: input.trim(),
          completed: false,
          userId: userInfo.id,
        })
        .then((res) => {
          setTodos((prev) => (prev ? prev.concat(res.data) : [res.data]));
        });
    }
    inputRef.current!.value = '';
  }

  function checkTodo(id: number) {
    axios.put(`https://dummyjson.com/todos/${id}`).then((res) => {
      console.log('res.data', res.data, todos);
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    });
  }

  function deleteTodo(id: number) {
    axios.delete(`https://dummyjson.com/todos/${id}`).then((res) => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    });
  }

  return (
    <div>
      <form className='todo-form' onSubmit={AddTodo}>
        <input
          type='text'
          name='todo'
          ref={inputRef}
          placeholder='오늘 할 일은?'
          autoComplete='off'
        />
        <button type='submit'>+</button>
      </form>
      <ul className='todo-list'>
        {todos &&
          todos.map((todo) => (
            <div className='todo-item' key={todo.id}>
              <li
                key={todo.id}
                className={todo.completed ? 'completed' : 'not-completed'}
              >
                {todo.todo}
              </li>
              <div className='icon-box'>
                <FaSquareCheck
                  onClick={() => checkTodo(todo.id)}
                  className='icon'
                />
                <FaTrash onClick={() => deleteTodo(todo.id)} className='icon' />
              </div>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default ToDoList;
