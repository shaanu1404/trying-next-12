
import { Todo } from "@/types/todos";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos"

export const fetchTodos = async () => {
    const response = await fetch(`${BASE_URL}?_limit=10`);
    const todos = (await response.json()) as Todo[];
    return todos;
}

export const fetchTodosById = async (todoId: string) => {
    const response = await fetch(`${BASE_URL}/${todoId}`);
    const todo = (await response.json()) as Todo;
    return todo;
}