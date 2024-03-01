import { FC } from "react";
import { Text } from "@/components/typography/text";
import { Todo } from "..";

export const TodoCard: FC<Todo> = (todo) => {
  return (
    <div className="p-md border rounded">
      <Text>{todo.todo}</Text>
    </div>
  );
};
