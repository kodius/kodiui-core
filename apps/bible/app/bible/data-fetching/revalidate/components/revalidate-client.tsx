'use client'

import { Cluster } from '@/components/primitives/cluster'
import { Stack } from '@/components/primitives/stack'
import { Text } from '@/components/typography/text'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const RevalidateClient = () => {
  const router = useRouter()
  const [count, setCount] = useState(0)
  return (
    <Stack>
      <Text>Revalidate client side</Text>
      <Cluster items='center'>
        <Button
          onClick={() => {
            router.refresh()
          }}
          className="w-fit"
        >
          revalidate
        </Button>
        <Text>{count}</Text>
        <Button onClick={() => setCount((prev) => prev + 1)}>increment</Button>
      </Cluster>
    </Stack>
  )
}
