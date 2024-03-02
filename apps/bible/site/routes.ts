import { Route } from "next";

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
    projectStructure: {
      module: {
        index: "/bible/project-structure/module",
      },
    },
    routing: {
      interceptingRoutes: {
        index: "/bible/routing/intercepting-routes",
      },
      nestedDynamicRoutes: {
        index: "/bible/routing/nested-dynamic-routes",
        todo2: {
          ":id": {
            index: "/bible/routing/nested-dynamic-routes/todo/:id",
          },
        },
        todo: {
          ":id": (id: string): Record<string, Route> => ({
            // @ts-ignore
            index: `/bible/routing/nested-dynamic-routes/todo/${id}`,
          }),
        },
      },
    },
  },
} as const;

type GoToArgs = {
  where: "";
};

type GoTo = (args: GoToArgs) => Route;

export const goTo: GoTo = (args) => {
  return "/bible/data-fetching/parrallel-and-sequential";
};
