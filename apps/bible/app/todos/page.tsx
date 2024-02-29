import { Stack } from "@/components/primitives/stack";
import { getTodos } from "../api/todo";
import { Todo } from "../todo/components/task";

const TodosPage = async () => {
  const { todos } = await getTodos();
  return (
    <Stack>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </Stack>
  );
};

export default TodosPage;
