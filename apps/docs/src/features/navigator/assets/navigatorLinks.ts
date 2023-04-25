import { routes } from '@/routes'
import { Navigator } from '../types'

export const navigatorLinks: Navigator[] = [
  {
    id: 0,
    name: 'Project Guides',
    isParent: true,
    children: [
      {
        id: 0,
        name: 'NextJS',
        href: routes.NextJsProject,
        state: 'dev',
      },
      {
        id: 1,
        name: 'NextJS App Directory',
        href: routes.NextJsAppProject,
        state: 'todo',
      },
    ],
  },
  {
    id: 1,
    name: 'ui',
    isParent: true,
    children: [
      {
        id: 0,
        name: 'Install',
        href: routes.installKodiui,
        state: 'dev',
      },
      {
        id: 1,
        name: 'Multiple themes',
        href: routes.multipleThemes,
        state: 'dev',
      },
    ],
  },
  {
    id: 2,
    name: 'primitives',
    isParent: true,
    children: [
      {
        id: 0,
        name: 'Stack',
        href: routes.stack,
        state: 'dev',
      },
      {
        id: 1,
        name: 'Center',
        href: routes.center,
        state: 'dev',
      },
      {
        id: 2,
        name: 'Cluster',
        href: routes.cluster,
        state: 'dev',
      },
      {
        id: 3,
        name: 'Split',
        href: routes.split,
        state: 'dev',
      },
      {
        id: 6,
        name: 'Sidebar',
        href: routes.sidebar,
        state: 'dev',
      },
      {
        id: 7,
        name: 'Switcher',
        href: routes.switcher,
        state: 'dev',
      },
      {
        id: 8,
        name: 'FlexBox',
        href: routes.flexBox,
        state: 'dev',
      },
    ],
  },
  {
    id: 3,
    name: 'components',
    isParent: true,
    children: [
      {
        id: 0,
        name: 'Button',
        href: routes.button,
        state: 'new',
      },
      {
        id: 1,
        name: 'Drawer',
        href: routes.drawer,
        state: 'new',
      },
      {
        id: 2,
        name: 'Input',
        href: routes.input,
        state: 'new',
      },
      {
        id: 3,
        name: 'ButtonLink',
        href: routes.buttonLink,
        state: 'new',
      },
      {
        id: 4,
        name: 'TextDropdown',
        href: routes.textDropdown,
        state: 'new',
      },
      {
        id: 5,
        name: 'Divider',
        href: routes.divider,
        state: 'new',
      },
      {
        id: 6,
        name: 'Switch',
        href: routes.switch,
        state: 'dev',
      },
      {
        id: 7,
        name: 'Tabs',
        href: routes.tabs,
        state: 'dev',
      },
      {
        id: 8,
        name: 'Badge',
        href: routes.badge,
        state: 'new',
      },
    ],
  },
  {
    id: 4,
    name: 'typography',
    isParent: true,
    children: [
      {
        id: 0,
        name: 'Headings',
        href: routes.headings,
        state: 'new',
      },
      {
        id: 1,
        name: 'Text',
        href: routes.text,
        state: 'new',
      },
      {
        id: 2,
        name: 'TextLink',
        href: routes.textLink,
        state: 'new',
      },
    ],
  },
]
