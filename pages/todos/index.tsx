import Heading from "@/components/Heading";
import { Todo } from "@/types/todos";
import { fetchTodos } from "@/utils/todos";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";

export default function TodoList({
  todos,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Heading>Todolist</Heading>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="p-3 rounded-md border border-white/20 space-y-2"
          >
            <Link href={`/todos/${todo.id}`} legacyBehavior>
              <h4 className="text-white font-medium cursor-pointer flex items-center space-x-3">
                {todo.completed ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                )}
                <span>{todo.title}</span>
              </h4>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps = (async () => {
  console.log("Running server side");
  const todos = await fetchTodos();
  return {
    props: {
      todos,
    },
  };
}) satisfies GetServerSideProps<{ todos: Todo[] }>;
