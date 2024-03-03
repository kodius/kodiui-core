import { Suspense } from 'react'
import { ParrallelFetching } from '../components/parallel-fetching'

export default function ParrallelPage() {
  return (
    <Suspense fallback="loading..">
      <ParrallelFetching />
    </Suspense>
  )
}
