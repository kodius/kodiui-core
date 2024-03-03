import { Cluster } from '@/components/primitives/cluster'
import { Stack } from '@/components/primitives/stack'
import { Text } from '@/components/typography/text'
import { Button } from '@/components/ui/button'
import { createTodo } from '@/module/todo/api'
import { revalidatePath } from 'next/cache'

export const RevalidateServer = () => {
  const revalidate = async () => {
    'use server'
    await createTodo({ todo: 'Test todo', userId: 1 })
    revalidatePath('/bible/data-fetching/suspense', 'page')
  }
  return (
    <Stack>
      <Text>Revalidate server side</Text>
      <Cluster items="center">
        <form action={revalidate}>
          <Button className="w-fit">revalidate</Button>
        </form>
      </Cluster>
    </Stack>
  )
}
