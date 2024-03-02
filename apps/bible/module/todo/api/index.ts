import { api } from '@/site/api'
import { Todo } from '../todo'

export type GetTodosResponse = {
  todos: Todo[]
}

export const getTodos = async (init?: RequestInit): Promise<GetTodosResponse> => {
  const resJSON = await fetch(`${api.route}/todos`, init)
  const data = (await resJSON.json()) as GetTodosResponse
  return data
}
