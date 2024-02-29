import { BasicList } from "@/app/_templates/basic-list";
import { getTodos } from "@/app/api/todo";
import { Todo } from "@/app/todo/components/todo";
import { ShowUsers } from "@/app/user/components/show-users";
import { Stack } from "@/components/primitives/stack";

export const ShowTodosWithUsers = async () => {
  const { todos } = await getTodos("sequential example");
  return (
    <Stack>
      <BasicList title="Todos:">
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </BasicList>
      <ShowUsers />
    </Stack>
  );
};
