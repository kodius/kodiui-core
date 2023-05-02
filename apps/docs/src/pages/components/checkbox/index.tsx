import * as React from 'react'

import { Badge } from '@/components'
import { Doc } from '@/features/documentation'
import { Stack } from '@kodiui/ui'
import { Checkbox } from '@/components/inputs/Checkbox/Checkbox'

const CheckboxPage = () => {
  const [isChecked, toggleCheck] = React.useState<boolean | 'indeterminate'>(false)
  return (
    <Doc downloadable>
      <Stack>
        <Doc.Title>Switch</Doc.Title>
        <Badge>@radix-ui/react-checkbox</Badge>
      </Stack>
      <Doc.Block
        subTitle="checkbox"
        exampleWithCode={
          <Checkbox checked={isChecked} onCheckedChange={(checked) => toggleCheck(checked)} />
        }
      />
    </Doc>
  )
}

export default CheckboxPage
