import { Route } from 'next'

export const resloveTodoIdRoute = (todoId: string) => `/bible/routing/nested-dynamic-routes/todo/${todoId}` as Route

export const resolveUserIdRoute = (todoId: string, userId: string) =>
  (resloveTodoIdRoute(todoId) + `/user/${userId}`) as Route

export const routesResolvers = {
  resolveUserIdRoute,
  resloveTodoIdRoute,
}

export const routes = {
  todos: {
    index: '/todos',
  },
  bible: {
    dataFetching: {
      parrallelAndSequential: {
        index: '/bible/data-fetching/parrallel-and-sequential',
      },
    },
    projectStructure: {
      module: {
        index: '/bible/project-structure/module',
      },
    },
    routing: {
      interceptingRoutes: {
        index: '/bible/routing/intercepting-routes',
      },
      nestedDynamicRoutes: {
        index: '/bible/routing/nested-dynamic-routes',
        todo: {
          ':todo-id': (todoId: string) => ({
            index: resloveTodoIdRoute(todoId),
            user: {
              ':user-id': (userId: string) => ({
                index: resolveUserIdRoute(todoId, userId),
              }),
            },
          }),
        },
      },
    },
    system: {
      errorBoundary: {
        index: '/bible/system/error-boundary',
      },
    },
  },
} as const
