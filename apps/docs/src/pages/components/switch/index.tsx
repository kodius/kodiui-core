import * as React from 'react'

import { Switch } from '@/components'
import { Doc } from '@/features/documentation'
import { Cluster } from '@kodiui/ui'

const SwitchPage = () => {
  const [isChecked, toggleSwitch] = React.useState(false)
  return (
    <Doc downloadable>
      <Doc.Title>Switch</Doc.Title>
      <Doc.Block
        subTitle="Tone"
        exampleWithCode={
          <Cluster>
            <Switch checked={isChecked} onCheckedChange={(checked) => toggleSwitch(checked)} />
            <Switch
              checked={isChecked}
              onCheckedChange={(checked) => toggleSwitch(checked)}
              tone="brand"
            />
            <Switch
              checked={isChecked}
              onCheckedChange={(checked) => toggleSwitch(checked)}
              tone="brandAccent"
            />
            <Switch
              checked={isChecked}
              onCheckedChange={(checked) => toggleSwitch(checked)}
              tone="success"
            />
            <Switch
              checked={isChecked}
              onCheckedChange={(checked) => toggleSwitch(checked)}
              tone="info"
            />
            <Switch
              checked={isChecked}
              onCheckedChange={(checked) => toggleSwitch(checked)}
              tone="critical"
            />
          </Cluster>
        }
      />
    </Doc>
  )
}

export default SwitchPage
