import { BasicList } from "@/app/_templates/basic-list";
import { getTodos } from "@/app/api/todo";
import { Todo } from "@/app/todo/components/todo";

export const ShowTodos = async () => {
  const { todos } = await getTodos("sequential example");
  return (
    <BasicList title="Todos:">
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </BasicList>
  );
};
