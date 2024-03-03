import { Suspense } from 'react'
import { SequentialFetching } from '../components/sequential-fetching'

export default function SequentialPage() {
  return (
    <Suspense fallback="loading..">
      <SequentialFetching />
    </Suspense>
  )
}
