import * as React from 'react'

import { Badge, Switch } from '@/components'
import { Doc } from '@/features/documentation'
import { Cluster, Stack } from '@kodiui/ui'

const SwitchPage = () => {
  const [isChecked, toggleSwitch] = React.useState(false)
  return (
    <Doc downloadable>
      <Stack>
        <Doc.Title>Switch</Doc.Title>
        <Badge>@radix-ui/react-switch</Badge>
      </Stack>
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
