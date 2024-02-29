import { getTodos } from "@/app/api/todo";
import { Todo } from "@/app/todo/components/todo";
import { ShowUsers } from "@/app/user/components/show-users";
import { Stack } from "@/components/primitives/stack";
import { Text } from "@/components/typography/text";

export const ShowTodos = async () => {
  const { todos } = await getTodos("bad example");
  return (
    <Stack>
      <Text>Todos:</Text>
      <Stack className="max-h-[200px] overflow-scroll p-md border-4">
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </Stack>
      <ShowUsers />
    </Stack>
  );
};
