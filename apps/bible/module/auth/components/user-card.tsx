import { Text } from '@/components/typography/text'
import { getSession } from '../lib'
import { cn } from '@/lib/utils'
import { Stack } from '@/components/primitives/stack'

export const UserCard = async () => {
  const session = await getSession()
  if (!session) return null
  return (
    <Stack gap="xs" className={cn('p-sm border rounded-md animate-in slide-in-from-top overflow-hidden')}>
      <Text>{session?.user.name}</Text>
      <Text tone="muted">{session?.user.email}</Text>
    </Stack>
  )
}
