import { Suspense } from 'react'
import { ShowTodos } from './show-todos'

export const LoadTodos = () => {
  return (
    <Suspense fallback={<div>Loading todos..</div>}>
      <ShowTodos />
    </Suspense>
  )
}
