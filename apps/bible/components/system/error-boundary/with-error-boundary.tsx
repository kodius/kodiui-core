'use client'

import { ComponentType } from 'react'
import { withErrorBoundary as withErrorBoundaryPlugin } from 'react-error-boundary'
import { ErrorFallback } from './error-fallback'

/**
 ! Only works with "use client"  in parent component
*/

export const withErrorBoundary = (Component: ComponentType<any>) =>
  withErrorBoundaryPlugin(Component, { FallbackComponent: ErrorFallback })
