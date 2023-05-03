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
      {
        id: 2,
        name: 'Design Workflow',
        href: routes.NextJsAppProject,
        state: 'todo',
      },
    ],
  },
  {
    id: 1,
    name: 'Guides',
    isParent: true,
    children: [
      { id: 0, name: 'Design Workflow', href: routes.tabs, state: 'todo' },
      { id: 1, name: 'Development Workflow', href: routes.tabs, state: 'todo' },
      { id: 2, name: 'Contributing', href: routes.tabs, state: 'todo' },
    ],
  },
  {
    id: 2,
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
    id: 3,
    name: 'primitives',
    isParent: true,
    children: [
      {
        id: 0,
        name: 'Stack',
        href: routes.stack,
        state: 'new',
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
    id: 4,
    name: 'components',
    isParent: true,
    children: [
      {
        id: 0,
        name: 'Button',
        href: routes.button,
        state: 'dev',
      },
      {
        id: 1,
        name: 'Drawer',
        href: routes.drawer,
        state: 'dev',
      },
      {
        id: 2,
        name: 'Input',
        href: routes.input,
        state: 'dev',
      },
      {
        id: 3,
        name: 'ButtonLink',
        href: routes.buttonLink,
        state: 'dev',
      },
      {
        id: 4,
        name: 'TextDropdown',
        href: routes.textDropdown,
        state: 'dev',
      },
      {
        id: 5,
        name: 'Divider',
        href: routes.divider,
        state: 'dev',
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
        state: 'dev',
      },
      {
        id: 9,
        name: 'Animations',
        href: routes.animations,
        state: 'dev',
      },
      {
        id: 10,
        name: 'Accordion',
        href: routes.animations,
        state: 'todo',
      },
      {
        id: 11,
        name: 'Box',
        href: routes.animations,
        state: 'todo',
      },
      {
        id: 12,
        name: 'Alerts',
        href: routes.animations,
        state: 'todo',
      },
      {
        id: 13,
        name: 'Card',
        href: routes.animations,
        state: 'todo',
      },
      {
        id: 14,
        name: 'Checkbox',
        href: routes.checkbox,
        state: 'dev',
      },
      {
        id: 15,
        name: 'HiddenVisually',
        href: routes.animations,
        state: 'todo',
      },
      {
        id: 16,
        name: 'Loader',
        href: routes.animations,
        state: 'todo',
      },
      {
        id: 17,
        name: 'Tooltip',
        href: routes.tooltip,
        state: 'new',
      },
    ],
  },
  {
    id: 5,
    name: 'typography',
    isParent: true,
    children: [
      {
        id: 0,
        name: 'Headings',
        href: routes.headings,
        state: 'dev',
      },
      {
        id: 1,
        name: 'Text',
        href: routes.text,
        state: 'dev',
      },
      {
        id: 2,
        name: 'TextLink',
        href: routes.textLink,
        state: 'dev',
      },
    ],
  },
]
