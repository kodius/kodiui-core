'use client'

import { Stack } from '@/components/primitives/stack'
import { withErrorBoundary } from '@/components/system/error-boundary/with-error-boundary'
import { ErrorComponent } from './error-component'
import { ErrorBoundary } from '@/components/system/error-boundary/error-boundary'

const ErrorComponentWithError = withErrorBoundary(ErrorComponent)

export const ShowErrors = () => {
  return (
    <Stack>
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
      <ErrorComponentWithError />
    </Stack>
  )
}
