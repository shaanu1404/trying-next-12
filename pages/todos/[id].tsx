import { Todo } from "@/types/todos";
import { fetchTodosById } from "@/utils/todos";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  GetServerSidePropsContext,
} from "next";

export default function TodoDetails({
  todo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="p-3 w-full rounded-md border border-white/20">
      <div className="space-y-2">
        <h4 className="text-3xl text-white font-medium flex items-center space-x-3">
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
      </div>
    </div>
  );
}

export const getServerSideProps = (async (
  context: GetServerSidePropsContext
) => {
  console.log("Running server side for single todo");
  const { params } = context;
  if (!params?.id) {
    return {
      notFound: true,
    };
  }
  const todo = await fetchTodosById(params?.id as string);
  if (!todo || !Object.hasOwn(todo, "id")) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      todo,
    },
  };
}) satisfies GetServerSideProps<{ todo: Todo }>;
