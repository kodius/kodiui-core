# tree

- module/
  - todo/
    - components/
      - component-one.tsx
      - component-two.tsx
    - api/
      - get-api.ts
    - layouts/
    - types.ts
    - index.tsx

# rules

- everything should be exported from index.tsx

# module/todo/index.tsx

```
import { getTodos } from "./api";
import { FetchTodos } from "./components/fetch-todos";
import { LargeImage } from "./components/large-image";
import { TodoCard } from "./components/todo-card";

type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

const api = {
  getTodos,
};

const components = {
  TodoCard,
  FetchTodos,
  LargeImage,
};

// const image = {};
// const icons = {};
// const layouts = {};

const todo = {
  api,
  components,
};

export type { Todo };
export { todo };
```

# how to use

```
import { BasicList } from "@/app/_templates/basic-list";
import { todo } from "@/module/todo";

export const FetchTodos = async () => {
  const { todos } = await todo.api.getTodos();
  return (
    <BasicList title="todos:">
      {todos.map((item) => (
        <todo.components.TodoCard key={item.id} {...item} />
      ))}
    </BasicList>
  );
};
```
