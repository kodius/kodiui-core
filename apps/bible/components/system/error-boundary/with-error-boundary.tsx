
import { ComponentType, } from "react"
import { withErrorBoundary as withErrorBoundaryPlugin, } from "react-error-boundary"
import { ErrorFallback } from "./error-fallback"

export const withErrorBoundary = (Component: ComponentType<any>) => {
  return withErrorBoundaryPlugin(Component, { FallbackComponent: ErrorFallback })
}

