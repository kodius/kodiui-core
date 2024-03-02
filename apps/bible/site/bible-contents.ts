import { Route } from 'next'
import { routes } from './routes'

export type BibleContent = {
  title: string
  children: BibleContentChild[]
}

export type BibleContentChild = Omit<BibleContent, 'children'> & {
  href: Route
}

export const bibleContents: BibleContent[] = [
  {
    title: 'Data fetching',
    children: [
      {
        title: 'Parrallel and Sequential data fetching',
        href: routes.bible.dataFetching.parrallelAndSequential.index,
      },
    ],
  },
  {
    title: 'Routing',
    children: [
      {
        title: 'Intercepting Routes',
        href: routes.bible.routing.interceptingRoutes.index,
      },
      {
        title: 'Nested dynamic routes',
        href: routes.bible.routing.nestedDynamicRoutes.index,
      },
      {
        title: 'Parallel routes',
        href: routes.bible.routing.parallelRoutes.index,
      },
    ],
  },
  {
    title: 'Project Structure',
    children: [
      {
        title: 'Module Based',
        href: routes.bible.projectStructure.module.index,
      },
    ],
  },
  {
    title: 'System',
    children: [
      {
        title: 'Error Boundarys',
        href: routes.bible.system.errorBoundary.index,
      },
    ],
  },
]
