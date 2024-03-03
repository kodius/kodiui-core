import { Stack } from '@/components/primitives/stack'
import { Suspense } from 'react'
import { todo } from '@/module/todo'
import { getTodos } from '@/app/api/todo'
import { SuspensePromise } from './compoentns/suspense-promise'

export default async function SuspensePage() {
  // app is slow if we dont suspense, were waiting for the server
  const todoPromise = getTodos()
  return (
    <Stack>
      <Suspense fallback={<div>loading...</div>}>
        <todo.components.FetchTodos />
      </Suspense>
      <Suspense fallback={<div>loading...</div>}>
        <SuspensePromise promise={todoPromise} />
      </Suspense>
      {/* <todo.components.FetchTodos /> */}
    </Stack>
  )
}
