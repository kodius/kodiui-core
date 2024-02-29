import { getTodos } from "@/app/api/todo";
import { getUsers } from "@/app/api/users";
import { Todo } from "@/app/todo/components/todo";
import { DisplayUsers } from "@/app/user/components/display-users";
import { Stack } from "@/components/primitives/stack";
import { Text } from "@/components/typography/text";

export const DisplayTodos = async () => {
  const todosPromise = getTodos("good example");
  const usersPromise = getUsers("good example");
  const [todos, users] = await Promise.all([todosPromise, usersPromise]);

  // One more bad example
  // const todos = await getTodos("good example");
  // const users = await getUsers("good example");

  return (
    <Stack>
      <Text>Todos:</Text>
      <Stack className="max-h-[200px] overflow-scroll p-md border-4">
        {todos.todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </Stack>
      <DisplayUsers users={users.users} />
    </Stack>
  );
};
