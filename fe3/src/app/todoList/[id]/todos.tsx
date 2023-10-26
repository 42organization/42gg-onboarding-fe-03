'use client'
import { todoStateInterface } from "@/Atom/todoState"
import { useState } from "react";

const Todos = ({todo} : {todo: todoStateInterface}) => {
    const[todoList, setTodoList] = useState(todo);
    const[inputText, setInputText] = useState('');

    const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }

    const handleAdd = () => {
        const next = {
            ...todoList,
            "todo": [...todoList.todo, inputText],
            "complted": [...todoList.completed, false],
        };
        setTodoList(next);
        setInputText('');
    }

    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-center">
                <h1>Todo List</h1>
                <div>
                    <input
                        type="text"
                        value={inputText}
                        onChange={handleInput}
                        className="text-black "
                    />
                    <button onClick={handleAdd}>Add</button>
                </div>
                <ul>
                    {todoList.todo.map((todo, index) => (
                        <li key={index}>
                            {todoList.completed[index] ?  "completed" : todo}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Todos;