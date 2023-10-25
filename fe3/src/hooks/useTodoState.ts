import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import todoState from "@/Atom/todoState";

const defaultValue = {todo: ["NO DATA YET"], completed:[false]};

export function usetodoState() {
    const [isInitial, setIsInitial] = useState(true);
    const [todoList, setTodoList] = useRecoilState(todoState);

    useEffect(() => {
        setIsInitial(false);
    }, []);

    return [isInitial ? defaultValue: todoList, setTodoList] as const;
}