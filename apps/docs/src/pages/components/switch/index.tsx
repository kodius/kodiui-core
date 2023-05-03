import * as React from 'react'

import { Switch, Tabs, TabsContent, TabsList, TabsTrigger } from '@/components'
import { Doc, PropsProps, VersionsProps } from '@/features/documentation'
import { Cluster, Stack } from '@kodiui/ui'

const SwitchPage = () => {
  const [isChecked, toggleSwitch] = React.useState(false)
  return (
    <Doc>
      <Doc.Header
        title="Switch"
        dependsOn="Radix-ui"
        description="Toggle is a checkbox that is styled to look like a switch button.

"
      />
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Component</TabsTrigger>
          <TabsTrigger value="tab2">Props</TabsTrigger>
          <TabsTrigger value="tab3">Versions</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <Stack>
            <Doc.Block
              subTitle="Example"
              description="Default component styles"
              exampleWithCode={
                <Switch checked={isChecked} onCheckedChange={(checked) => toggleSwitch(checked)} />
              }
            />
            <Doc.Block
              subTitle="Tones"
              description="Different tones"
              exampleWithCode={
                <Cluster>
                  <Switch
                    checked={isChecked}
                    onCheckedChange={(checked) => toggleSwitch(checked)}
                  />
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
                  />{' '}
                </Cluster>
              }
            />
            <Doc.Block
              subTitle="Disabled"
              description="When disabled the user can't toggle the component."
              exampleWithCode={<Switch disabled />}
            />
          </Stack>
          <Doc.Download />
        </TabsContent>
        <TabsContent value="tab2">
          <Doc.Props {...props}>tab2</Doc.Props>
        </TabsContent>
        <TabsContent value="tab3">
          <Doc.Versions {...versions} />
        </TabsContent>
      </Tabs>
    </Doc>
  )
}

export default SwitchPage

const props: PropsProps = {
  link: {
    name: 'Radix doc',
    href: 'https://www.radix-ui.com/docs/primitives/components/switch#api-reference',
  },
  props: [
    {
      name: 'checked',
      values: ['true', 'false'],
      description:
        'State of the component, can be either checked or unchecked (boolean true or false).',
    },
  ],
}
const versions: VersionsProps = {
  versions: [
    {
      title: 'Initial component API using Radix and custom styles.',
      description:
        'Component API is 1 on 1 with Radix and currently you can set tones brand, brandAccent, success, info and critical. Default styles is using black color. Supports both light and dark theme.',
      version: '0.0.1',
    },
    { title: 'Initial', description: 'Initial', version: '0.0.1' },
  ],
}
