import { Todo } from '@/app/todo/types'
import { api } from '@/site/api'

export type GetTodosResponse = {
  todos: Todo[]
}

export const getTodos = async (init?: RequestInit): Promise<GetTodosResponse> => {
  const resJSON = await fetch(`${api.route}/todos`, init)
  const data = (await resJSON.json()) as GetTodosResponse
  return data
}
