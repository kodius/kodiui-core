import { getTodos } from './api'
import { FetchTodos } from './components/fetch-todos'
import { LargeImage } from './components/large-image'
import { TodoCard } from './components/todo-card'

type Todo = {
  id: number
  todo: string
  completed: boolean
  userId: number
}

const api = {
  getTodos,
}

const components = {
  TodoCard,
  FetchTodos,
  LargeImage,
}

// const image = {};
// const icons = {};
// const layouts = {};

const todo = {
  api,
  components,
}

export type { Todo }
export { todo }
