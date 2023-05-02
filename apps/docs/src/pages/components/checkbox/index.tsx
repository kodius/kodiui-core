import * as React from 'react'

import { Badge } from '@/components'
import { Doc } from '@/features/documentation'
import { Stack } from '@kodiui/ui'
import { Checkbox } from '@/components/inputs/Checkbox/Checkbox'

const CheckboxPage = () => {
  return (
    <Doc>
      <Stack>
        <Doc.Title>Switch</Doc.Title>
        <Badge>@radix-ui/react-checkbox</Badge>
      </Stack>
      <Doc.Block subTitle="checkbox" exampleWithCode={<Checkbox />} />
    </Doc>
  )
}

export default CheckboxPage
