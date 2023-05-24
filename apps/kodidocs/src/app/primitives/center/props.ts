import { PropsType } from '@features/documentation'
import { Space } from '@kodiui/ui'

export const props: PropsType = {
  props: [
    {
      name: 'direction',
      values: ['horizontal', 'vertical', 'center'],
      description: 'Aligns content verticaly, horoziontnly or both',
      defaultValue: 'horizontal',
    },
  ],
}
