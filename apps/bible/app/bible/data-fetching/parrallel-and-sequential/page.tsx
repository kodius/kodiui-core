import { Suspense } from 'react'
import { ParrallelFetching } from './components/parallel-fetching'
import { SequentialFetching } from './components/sequential-fetching'
import { Cluster } from '@/components/primitives/cluster'
import { Stack } from '@/components/primitives/stack'
import Link from 'next/link'

const ParrallelAndSequentialPage = () => {
  return (
    <Stack>
      <Cluster>
        <Link href="/bible/data-fetching/parrallel-and-sequential/parrallel">Parrallel</Link>
        <Link href="/bible/data-fetching/parrallel-and-sequential/sequential">Sequential</Link>
      </Cluster>
      <div className="grid grid-cols-2  gap-xl">
        <div>
          <Suspense fallback="parrallel rxample loading..">
            <ParrallelFetching />
          </Suspense>
        </div>
        <div>
          <Suspense fallback="sequential example loading..">
            <SequentialFetching />
          </Suspense>
        </div>
      </div>
    </Stack>
  )
}

export default ParrallelAndSequentialPage
