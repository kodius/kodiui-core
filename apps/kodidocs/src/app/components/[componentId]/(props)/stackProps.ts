import { PropsType } from '@features/documentation'
import { Space } from '@kodiui/ui'

export const stackProps: PropsType = {
  link: {
    href: 'https://www.radix-ui.com/docs/primitives/components/context-menu#root',
    name: 'Radix',
  },
  props: [
    {
      name: 'gap',
      values: Object.keys(Space).map((space) => space),
      description: 'The spacing between childrens can be adjusted using the gap prop.',
      defaultValue: 'xs',
    },
  ],
}
