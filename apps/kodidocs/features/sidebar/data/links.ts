interface BaseLink {
  name: string
}

interface SectionLink extends BaseLink {
  items: ItemLink[]
  href?: never
}

interface ItemLink extends BaseLink {
  href: string
  state: ComponentState
  items?: never
}

type ComponentState = 'completed' | 'dev' | 'new' | 'todo'

type Link = SectionLink | ItemLink

export const navLinks: Link[] = [
  {
    name: 'Project Guides',
    items: [
      { name: 'Next 13', href: '#', state: 'todo' },
      { name: 'Design Workflow', href: '#', state: 'todo' },
    ],
  },
  { name: 'Guides', items: [{ name: 'Design Workflow', href: '#', state: 'dev' }] },
  {
    name: 'UI',
    items: [
      { name: 'Install', href: '#', state: 'dev' },
      { name: 'Multiple Thmes', href: '#', state: 'dev' },
    ],
  },
  {
    name: 'Primitives',
    items: [
      { name: 'Accordion', href: '#', state: 'dev' },
      { name: 'Avatar', href: '#', state: 'dev' },
    ],
  },
  { name: 'Components', items: [{ name: 'Primitive 1', href: '#', state: 'dev' }] },
  { name: 'Typography', items: [{ name: 'Primitive 1', href: '#', state: 'dev' }] },
]
