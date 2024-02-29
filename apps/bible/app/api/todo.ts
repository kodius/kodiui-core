import { api } from "@/site/api";
import { Todo } from "../todo/types";

export type GetTodosResponse = {
  todos: Todo[];
};

export const getTodos = async (
  consoleMessage?: string,
  init?: RequestInit,
): Promise<GetTodosResponse> => {
  console.log("fatching todos" + " " + consoleMessage);
  const resJSON = await fetch(`${api.route}/todos`, init);
  console.log("fatching todos finished" + " " + consoleMessage);
  const data = (await resJSON.json()) as GetTodosResponse;
  return data;
};
