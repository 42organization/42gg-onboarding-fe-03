'use client'
import { todoStateInterface } from "@/Atom/todoState";
import Todos from "./todos";
import { GetServerSideProps } from "next";

const url = 'http://localhost:4000/'; // 대상 URL

async function getTodos(id:string) {
  const res = await fetch(url + 'todo');
  const data = await res.json();
  return data.find((item: { id: string }) => item.id ===id) || null;
}

export default async function page({ params: { id } }: { params: { id: string }}) {

  const todos = getTodos(id);

  const [todosAwait] = await Promise.all([todos]);
  
  return (
      <Todos todo={todosAwait}/>
    )
}