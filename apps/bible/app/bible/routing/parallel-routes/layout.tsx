import { Cluster } from '@/components/primitives/cluster'
import { Stack } from '@/components/primitives/stack'
import { Heading } from '@/components/typography/heading'
import Link from 'next/link'
import { PropsWithChildren, ReactNode } from 'react'

type Props = {
  todos: ReactNode
  users: ReactNode
  base: ReactNode
} & PropsWithChildren

export default function ParallelRoutesLayout({ children, todos, users, base }: Props) {
  return (
    <Stack>
      <div className="border p-md">
        <Stack>
          <Heading level="4">Layout</Heading>
          <Cluster>
            <Link href="/bible/routing/parallel-routes">Parallel</Link>
            <Link href="/bible/routing/parallel-routes/settings">Settings</Link>
          </Cluster>
          <div className="grid grid-cols-2 gap-md">
            <div className="border p-md">{todos}</div>
            <div className="border p-md">{users}</div>
          </div>
          <div className="border p-md">{children}</div>
          <div className="border p-md">{base}</div>
        </Stack>
      </div>
    </Stack>
  )
}
