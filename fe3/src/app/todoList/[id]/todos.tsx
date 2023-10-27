'use client'
import { todoStateInterface } from "@/Atom/todoState"
import { useState } from "react";

import { updateTodo } from "./api";

const Todos = ({ todo, id }: { todo: todoStateInterface, id:string }) => {
    const [todoList, setTodoList] = useState(todo);
    const [isPending, setIsPending] = useState(false);
    const [inputText, setInputText] = useState('');
    const [correct, setCorrect] = useState(todo.todo);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }

    const handleAdd: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const next = {
            "id" : id,
            "todo": [...todoList.todo, inputText],
            "completed": [...todoList.completed, false],
            "correct": [...todoList.correct, false],
        };
        setIsPending(true);
        const res = updateTodo(id, next);

        setCorrect(next.todo);
        setTodoList(next);
        setInputText('');
    }

    const handleComplete = (idx: number) => {
        const newCompleted = [...todoList.completed];
        newCompleted[idx] = !newCompleted[idx];
        const next = {
            "id" : id,
            "todo": [...todoList.todo],
            "completed": newCompleted,
            "correct": [...todoList.correct]
        };
        setIsPending(true);
        const res = updateTodo(id, next);

        setTodoList(next);
        setInputText('');
    }

    const handleDelete = (idx: number) => {
        const next = {
            "id" : id,
            "todo" : todoList.todo.filter((todo, index) => index !== idx),
            "completed" : todoList.completed.filter((completed, index) => index !== idx),
            "correct": todoList.correct.filter((correct, index) => index !== idx),
        };
        setIsPending(true);
        const res = updateTodo(id, next);
        setCorrect(next.todo);
        setTodoList(next);
    }

    const handleCorrect = (idx: number) => {
        const newTodo = todoList.todo;
        const newCorrect = todoList.correct;
        
        newTodo[idx] = correct[idx];
        newCorrect[idx] = !newCorrect[idx];
        const next = {
            "id" : id,
            "todo" : newTodo,
            "completed" : [...todoList.completed],
            "correct": newCorrect
        }

        const res = updateTodo(id, next);
        setTodoList(next);
    }

    const handleCorrectInput = (e:React.ChangeEvent<HTMLInputElement>, index:number) => {
        const newCorrect = [...correct];
        newCorrect[index] = e.target.value;
        setCorrect(newCorrect);
    }

    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-center w-[400px] h-[800px]">
                <h1 className="p-4 text-2xl">Todo List</h1>
                <form onSubmit={handleAdd} className="flex w-full p-4">
                    <input
                        type="text"
                        value={inputText}
                        onChange={handleInput}
                        className="text-black flex-grow"
                    />
                    <button type="submit" className="p-2">Add</button>
                </form>
                <ul className="list-none p-4 h-[800px] w-[400px] max-h-[800px] overflow-y-auto border border-gray-300">
                    {todoList.todo.map((todo, index) => (
                        <li key={index} className="flex w-full p-2 text-white  justify-between">
                            <div className="w-9/12">
                                <span onClick={() =>handleComplete(index)} className={`whitespace-normal ${todoList.correct[index] ? 'hidden' : ''}`}>
                                    {todo}
                                </span>
                                <input
                                    type="text"
                                    value={correct[index]}
                                    onChange={(e) => handleCorrectInput(e, index)}
                                    className={`text-black w-full ${!todoList.correct[index] ? 'hidden' : ''}`}
                                >
                                </input>
                            </div>
                            <div>
                                <button onClick={() => handleCorrect(index)} className="px-1">{todoList.correct[index] ? "저장" : "수정"}</button>
                                <button onClick={() => handleDelete(index)} className="px-1">삭제</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Todos;