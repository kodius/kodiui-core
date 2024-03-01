import { BasicList } from "@/app/_templates/basic-list";
import { todo } from "@/module/todo";

export const FetchTodos = async () => {
  const { todos } = await todo.api.getTodos();
  return (
    <BasicList title="todos:">
      {todos.map((item) => {
        return <todo.components.TodoCard key={item.id} {...item} />;
      })}
    </BasicList>
  );
};
