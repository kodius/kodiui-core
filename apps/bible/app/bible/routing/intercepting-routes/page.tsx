import { Stack } from '@/components/primitives/stack'
import { todo } from '@/module/todo'
import Link from 'next/link'

const InterceptingRoutesPage = async () => {
  const { todos } = await todo.api.getTodos()
  return (
    <Stack>
      {todos.map((item) => {
        return (
          <Link href={`/bible/routing/intercepting-routes/todo/${item.id}`} key={item.id}>
            <todo.components.TodoCard {...item} />
          </Link>
        )
      })}
    </Stack>
  )
}

export default InterceptingRoutesPage
