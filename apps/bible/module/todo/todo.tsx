import { getTodos } from "./api";
import { TodoCard } from "./components/todo-card";

type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

const api = {
  get_todos: getTodos,
};

const components = {
  todoCard: TodoCard,
};

export type { Todo };
export { api, components };
