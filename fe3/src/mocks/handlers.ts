import { http, HttpResponse } from 'msw';
import { users } from "./db";
import { todo } from "./db";

const userResolver = ({ params }: {params : Record<string, string[] | string>}) => {
    const {userId} = params;
    console.log("userResolver")
    const ret = users.find(user => user.id === userId);
    if (ret)
        return new HttpResponse(null,
            {
                status: 200,
                statusText: "Find User",
            });
    return new HttpResponse(null,
        {
            status: 404,
            statusText: "Can't find User",
        });
    // return new HttpResponse("helloWorld");
}

const todoResolver = ({ params }: {params : Record<string, string[] | string>}) => {
    const {userId} = params;
    const ret = todo.find(user => user.id === userId);
    if (ret){
        return new HttpResponse(
            JSON.stringify({
                todoList: ret.todo,
                completed: ret.completed
            }),
            {
                status: 200,
                statusText: "Find User",
            });
    }
    return new HttpResponse(null,
        {
            status: 404,
            statusText: "Can't find User",
        });   
}

export const handlers = [
    http.get('http://localhost:9090/api/user', userResolver),
    http.get('http://localhost:9090/api/todo', todoResolver)
]