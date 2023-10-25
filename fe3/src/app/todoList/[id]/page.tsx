'use client'
import { usetodoState } from "@/hooks/useTodoState";

const url = 'http://localhost:4000/'; // 대상 URL
let todo:string[] = [];
let completed:boolean[] = [];

export default function page({ params }: { params: { id: string }}) {
  const [todoList, setTodoList] = usetodoState();
  
  fetch(url + "todo")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // JSON 형태로 응답 데이터를 파싱
      })
      .then((data) => {
        for (let i = 0; i < data.length; ++i) {
          if (data[i].id === params.id) {
            todo = data[i].todo;
            completed = data[i].completed;
            console.log(data[i]);
            break;
          }
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  return (
      <div>
        My Post: {params.id}
        {todo}
      </div>
    )
  }