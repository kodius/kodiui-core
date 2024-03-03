import { LoadTodos } from '@/app/todos/components/load-todos'
import { Stack } from '@/components/primitives/stack'
import { RevalidateClient } from './components/revalidate-client'
import { RevalidateServer } from './components/revalidate-server'

export default function RevalidatePage() {
  return (
    <Stack>
      <LoadTodos />
      <RevalidateClient />
      <RevalidateServer />
    </Stack>
  )
}
