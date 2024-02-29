import { BasicList } from "@/app/_templates/basic-list";
import { GetTodosResponse, getTodos } from "@/app/api/todo";
import { Todo } from "@/app/todo/components/todo";
import { FC } from "react";

export const DisplayTodos: FC<GetTodosResponse> = ({ todos }) => {
  return (
    <BasicList title="Todos:">
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </BasicList>
  );
};
