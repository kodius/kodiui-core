import { FC } from "react";
import { Text } from "@/components/typography/text";
import { Todo as TodoType } from "../types";

export const Todo: FC<TodoType> = (todo) => {
  return (
    <div className="p-md border rounded">
      <Text>{todo.todo}</Text>
    </div>
  );
};
