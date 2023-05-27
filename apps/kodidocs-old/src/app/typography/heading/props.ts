import { PropsType } from '@features/documentation'

export const props: PropsType = {
  props: [
    {
      name: 'level',
      values: ['1', '2', '2', '3', '4', '5', '6'],
      defaultValue: '-',
    },
    {
      name: 'weight',
      values: ['regular', 'weak'],
      defaultValue: 'regular',
    },
  ],
}
