import { ErrorBoundary as ErrorBoundaryPlugin, FallbackProps } from 'react-error-boundary'
import { ErrorFallback } from './error-fallback'
import { ComponentType, FC, PropsWithChildren } from 'react'

type Props = {
  fallback?: ComponentType<FallbackProps> | undefined
}

export const ErrorBoundary: FC<PropsWithChildren & Props> = (props) => (
  <ErrorBoundaryPlugin FallbackComponent={props?.fallback || ErrorFallback}>{props.children}</ErrorBoundaryPlugin>
)
