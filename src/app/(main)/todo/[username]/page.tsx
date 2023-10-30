"use client";

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "@/app/atom/todoListState";
import AddTodo from "./components/AddTodo";

import "./styles/TodoPage.scss";

export default function TodoPage({ params }: { params: { username: string } }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  useEffect(() => {
    async function fetchTodoList() {
      const requestUrl = `/api/todo?id=${params.username}`;

      try {
        const response = await fetch(requestUrl);

        if (response.ok) {
          const data = await response.json();
          setTodoList(data);
        } else {
          throw new Error("Server error");
        }
      } catch (error) {
        console.error("Failed to fetch todo list:", error);
      }
    }

    fetchTodoList();
  }, []);

  return (
    <div className="todo-page">
      <h1>{params.username}'s Todo list</h1>
      <AddTodo />
      <ul>
        {todoList.length > 0 &&
          todoList.map((todo) => <li key={todo.id}>{todo.todo}</li>)}
      </ul>
    </div>
  );
}
