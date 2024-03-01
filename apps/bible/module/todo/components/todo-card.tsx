import { FC } from "react";
import { Text } from "@/components/typography/text";
import type { Todo } from "../todo";

export const TodoCard: FC<Todo> = (todo) => {
  return (
    <div className="p-md border rounded">
      <Text>{todo.todo}</Text>
    </div>
  );
};
