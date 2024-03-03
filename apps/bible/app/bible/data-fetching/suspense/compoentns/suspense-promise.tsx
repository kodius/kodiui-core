import { GetTodosResponse } from '@/app/api/todo'

type Props = {
  promise: Promise<GetTodosResponse>
}

export async function SuspensePromise({ promise }: Props) {
  return promise.then((data) => data.todos.map((todo) => todo.todo))
}
