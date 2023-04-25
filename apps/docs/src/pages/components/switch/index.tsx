import * as React from 'react'

import { Switch } from '@/components'
import { Doc } from '@/features/documentation'

const SwitchPage = () => {
  const [isChecked, toggleSwitch] = React.useState(false)
  return (
    <Doc downloadable>
      <Doc.Title>Switch</Doc.Title>
      <Doc.Example>
        <Switch checked={isChecked} onCheckedChange={(checked) => toggleSwitch(checked)} />
      </Doc.Example>
    </Doc>
  )
}

export default SwitchPage
