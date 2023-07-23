'use client';
import React, { useState, useRef, useEffect } from 'react';
import './todos.scss';
import ToDo from '../../../types/ToDo';
import { FaTrash, FaPencil } from 'react-icons/fa6';

function ToDoList({ params }: { params: { userId: string } }) {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  //   const [editTodoId, setEditTodoId] = useState<number | null>(null);
  //   const editRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const input = inputRef.current!.value;

    if (input.trim().length) {
      const newTodo: ToDo = {
        id: Date.now(),
        text: input.trim(),
        checked: false,
      };
      setTodos((prev) => prev.concat(newTodo));
    }
    inputRef.current!.value = '';
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function checkTodo(id: number) {
    const newTodoList = todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
      }
      return todo;
    });
    setTodos(newTodoList);
  }

  return (
    <div>
      <h1>{`${params.userId}'s TO DO LIST`}</h1>
      <form className='todo-form' onSubmit={handleSubmit}>
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
        {todos.map((todo) => (
          <div className='todo-item'>
            <li
              key={todo.id}
              onClick={() => checkTodo(todo.id)}
              className={todo.checked ? 'checked' : 'non-checked'}
            >
              {todo.text}
            </li>
            <div className='icon-box'>
              {/* <FaPencil onClick={() => editTodo(todo.id)} className='icon' /> */}
              <FaTrash onClick={() => deleteTodo(todo.id)} className='icon' />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
