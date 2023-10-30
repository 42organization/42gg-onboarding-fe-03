import { NextResponse } from "next/server";
import userInfo from "../../../../db/userInfo";
import todos from "../../../../db/todos";

export async function POST(request: Request) {
  try {
    const requestBody = await request.json();
    const { username, todo } = requestBody;

    const user = userInfo.find((user) => user.id === username);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const userTodos = todos.find((todo) => todo.username === username);
    const newTodo = {
      id: Math.random().toString(),
      todo,
      isDone: false,
    };

    if (userTodos) {
      userTodos.todoList.push(newTodo);
    } else {
      todos.push({
        username: username,
        todoList: [newTodo],
      });
    }

    return NextResponse.json({
      todoList: userTodos?.todoList,
    });
  } catch (error) {
    return NextResponse.json({ error: "Bad Request" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const username = url.searchParams.get("id");
    if (!username) {
      return NextResponse.json({ error: "ID not provided" }, { status: 400 });
    }
    const userTodos = todos.find((todo) => todo.username === username);
    return NextResponse.json({
      todoList: userTodos?.todoList,
    });
  } catch (error) {
    return NextResponse.json({ error: "Bad Request" }, { status: 500 });
  }
}
