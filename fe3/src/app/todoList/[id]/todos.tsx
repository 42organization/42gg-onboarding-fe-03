'use client'
import { todoStateInterface } from "@/Atom/todoState"
import { useState } from "react";

const Todos = ({ todo }: { todo: todoStateInterface }) => {
    const [todoList, setTodoList] = useState(todo);
    const [isPending, setIsPending] = useState(false);
    const [inputText, setInputText] = useState('');

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }

    const handleAdd: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const next = {
            ...todoList,
            "todo": [...todoList.todo, inputText],
            "completed": [...todoList.completed, false],
        };
        setIsPending(true);

        fetch('http://localhost:4000/todo', {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(next),
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
        })

        setTodoList(next);
        setInputText('');
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
                <ul className="list-none p-4 w-[400px] max-h-[800px] overflow-y-auto border border-gray-300">
                    {todoList.todo.map((todo, index) => (
                        <li key={index} className="flex w-full p-2 text-white  justify-between">
                            <div className="w-9/12">
                                {todoList.completed[index] ? "completed" : todo}
                            </div>
                            <div>
                                <button className="px-1">수정</button>
                                <button className="px-1">삭제</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Todos;