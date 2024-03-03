import { Todo } from '@/app/todo/types'
import { api } from '@/site/api'

export type GetTodosResponse = {
  todos: Todo[]
}

export const getTodos = async (init?: RequestInit): Promise<GetTodosResponse> => {
  const resJSON = await fetch(`${api.route}/todos/user/5`, init)
  const data = (await resJSON.json()) as GetTodosResponse
  return data
}

export const createTodo = async (todo: Partial<Todo>) => {
  try {
    const res = await fetch(`${api.route}/todos/add`, {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    return await res.json()
  } catch (err) {
    console.log('err', err)
  }
}
