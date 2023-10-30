"use client";

import { useState, ChangeEvent } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userState from "@/app/atom/userState";
import { todoListState } from "@/app/atom/todoListState";
import "../styles/AddTodo.scss";

export default function AddTodo() {
  const setTodoList = useSetRecoilState(todoListState);
  const [inputValue, setInputValue] = useState("");
  const user = useRecoilValue(userState);

  function inputChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  async function todoSubmitHandler(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch("/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user.username,
        todo: inputValue,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      setTodoList(data.todoList);
      setInputValue("");
    } else {
      const errorData = await response.json();
      alert(errorData.errorMessage);
    }
  }

  return (
    <form id="todo-form" onSubmit={todoSubmitHandler}>
      <input
        id="todo-input"
        type="text"
        placeholder="할 일을 입력하세요."
        onChange={inputChangeHandler}
        value={inputValue}
      />
      <button type="submit">추가</button>
    </form>
  );
}
