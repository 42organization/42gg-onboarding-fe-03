import { todoStateInterface } from "@/Atom/todoState";

const url = 'http://localhost:4000/'; // 대상 URL

export async function updateTodo (id:string, next:todoStateInterface) {
    const res = await fetch( url + 'todo/' + id, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(next),
        cache: 'no-store',
    }).then(() => {
        console.log('new blog added');
    }).catch((error) => {
        console.log('error');
    })
}

export async function deleteTodo (id:string, next:todoStateInterface) {
    const res = await fetch( url + 'todo/' + id, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(next),
        cache: 'no-store',
    }).then(() => {
        console.log('new blog added');
        return "ok";
    }).catch((error) => {
        console.log(error);
    })
}

export async function getTodo(id:string) {
    const res = await fetch(url + 'todo', {
        cache: 'no-store',
    });
    const data = await res.json();
    return data.find((item: { id: string }) => item.id ===id) || null;
  }