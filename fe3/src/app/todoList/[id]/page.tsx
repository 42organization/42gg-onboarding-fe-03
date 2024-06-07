import Todos from "./todos";
import { getTodo } from "./api";
import { cookies } from 'next/headers'

const url = 'http://localhost:4000/'; // 대상 URL


export default async function page({ params: { id } }: { params: { id: string }}) {

  const userID = cookies().get('UID')?.value;
  const userRole = cookies().get('Urole')?.value;

  console.log(userID);
  if (userID){
    const todos = await getTodo(userID);
    const [todosAwait] = await Promise.all([todos]);

    return (
      <Todos todo={todosAwait} id={id}/>
    )
  }
  
  return (
    <div>
      user정보가 없습니다.
    </div>
  );
}