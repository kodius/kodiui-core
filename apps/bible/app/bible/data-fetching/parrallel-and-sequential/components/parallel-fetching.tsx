import { getTodos } from "@/app/api/todo";
import { getUsers } from "@/app/api/users";
import { DisplayTodos } from "@/app/todos/components/display-todos";
import { DisplayUsers } from "@/app/user/components/display-users";
import { Stack } from "@/components/primitives/stack";

export const ParrallelFetching = async () => {
  const todosPromise = getTodos("parallel example");
  const usersPromise = getUsers("parrallel example");
  const [todos, users] = await Promise.all([todosPromise, usersPromise]);

  // One more sequential example
  // const todos = await getTodos("good example");
  // const users = await getUsers("good example");

  return (
    <Stack>
      <DisplayTodos todos={todos.todos} />
      <DisplayUsers users={users.users} />
    </Stack>
  );
};
