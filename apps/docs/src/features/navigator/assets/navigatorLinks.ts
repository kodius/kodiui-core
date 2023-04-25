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
        state: 'in development',
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
      },
      {
        id: 1,
        name: 'Multiple themes',
        href: routes.multipleThemes,
      },
      {
        id: 2,
        name: 'Box',
        href: routes.box,
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
      },
      {
        id: 1,
        name: 'Center',
        href: routes.center,
      },
      {
        id: 2,
        name: 'Cluster',
        href: routes.cluster,
      },
      {
        id: 3,
        name: 'Split',
        href: routes.split,
      },
      {
        id: 4,
        name: 'Icon',
        href: routes.icon,
      },
      {
        id: 5,
        name: 'Imposter',
        href: routes.imposter,
      },
      {
        id: 6,
        name: 'Sidebar',
        href: routes.sidebar,
      },
      {
        id: 7,
        name: 'Switcher',
        href: routes.switcher,
      },
      {
        id: 8,
        name: 'FlexBox',
        href: routes.flexBox,
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
      },
      {
        id: 1,
        name: 'Drawer',
        href: routes.drawer,
      },
      {
        id: 2,
        name: 'Input',
        href: routes.input,
      },
      {
        id: 3,
        name: 'ButtonLink',
        href: routes.buttonLink,
      },
      {
        id: 4,
        name: 'TextDropdown',
        href: routes.textDropdown,
      },
      {
        id: 5,
        name: 'Divider',
        href: routes.divider,
      },
      {
        id: 6,
        name: 'Switch',
        href: routes.switch,
      },
      {
        id: 7,
        name: 'Tabs',
        href: routes.tabs,
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
      },
      {
        id: 1,
        name: 'Text',
        href: routes.text,
      },
      {
        id: 2,
        name: 'TextLink',
        href: routes.textLink,
      },
    ],
  },
]
