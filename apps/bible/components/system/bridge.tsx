'use client'

import { ParamKeys, Params, useParams } from '@/hooks/use-params'
import { routesResolvers } from '@/site/routes'
import { Route } from 'next'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { ErrorBoundary } from './error-boundary/error-boundary'

type RouteParams = {
  todoById?: Pick<Params, 'todo-id'>
  userById?: Pick<Params, 'todo-id' | 'user-id'>
}

type RouteParamsKeys = keyof RouteParams

type BridgeProps<T extends RouteParamsKeys> = {
  href: T
  params?: RouteParams[T]
} & PropsWithChildren

export const Bridge = <T extends keyof RouteParams>(props: BridgeProps<T>) => {
  return (
    <ErrorBoundary>
      <Component {...props} />
    </ErrorBoundary>
  )
}

export const Component = <T extends keyof RouteParams>({ params, children, href }: BridgeProps<T>) => {
  const liveParams = useParams()

  const getParam = (key: ParamKeys): string => {
    const _params = params as Params
    const value = _params?.[key] || liveParams[key]
    if (!value) throw new Error(`key ${key} not in parms`)
    return value
  }

  const resolveRoutes: Record<RouteParamsKeys, () => Route> = {
    userById: () => {
      const todoId = getParam('todo-id')
      const userId = getParam('user-id')
      return routesResolvers.resolveUserIdRoute(todoId, userId)
    },
    todoById: () => {
      const userId = getParam('user-id')
      return routesResolvers.resloveTodoIdRoute(userId)
    },
  }

  return <Link href={resolveRoutes[href]()}>{children}</Link>
}
