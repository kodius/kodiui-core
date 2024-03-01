export const routes = {
  todos: {
    index: "/todos",
  },
  bible: {
    dataFetching: {
      parrallelAndSequential: {
        index: "/bible/data-fetching/parrallel-and-sequential",
      },
    },
    routing: {
      interceptingRoutes: {
        index: "/bible/routing/intercepting-routes",
      },
    },
  },
} as const;
