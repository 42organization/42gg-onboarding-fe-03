import Todos from "./todos";
import { getTodo } from "./api";

const url = 'http://localhost:4000/'; // 대상 URL


export default async function page({ params: { id } }: { params: { id: string }}) {

  const todos = await getTodo(id);
  const [todosAwait] = await Promise.all([todos]);
  
  return (
      <Todos todo={todosAwait} id={id}/>
    )
}