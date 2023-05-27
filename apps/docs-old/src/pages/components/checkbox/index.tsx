import * as React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components'
import { Doc, PropsProps, VersionsProps } from '@/features/documentation'
import { Stack } from '@kodiui/ui'
import { Checkbox } from '@/components/inputs/Checkbox/Checkbox'

const CheckboxPage = () => {
  const [isChecked, toggleCheck] = React.useState<boolean | 'indeterminate'>(false)
  return (
    <Doc>
      <Doc.Header
        title="Checkbox"
        dependsOn="Radix-ui"
        description="Checkbox component is used in forms when a user needs to select multiple values from several options. It can be used as a standalone component to toggle values between checked and not checked."
      />
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Component</TabsTrigger>
          <TabsTrigger value="tab2">Props</TabsTrigger>
          <TabsTrigger value="tab3">Versions</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <Stack gap="3xl">
            <Doc.Block
              subTitle="Example"
              description="Toggle between checked and not checked"
              exampleWithCode={
                <Checkbox checked={isChecked} onCheckedChange={(checked) => toggleCheck(checked)} />
              }
            />
            <Doc.Block
              subTitle="Disabled"
              description="When disabled the component can't be toggled and it takes a lightly grayish background color."
              exampleWithCode={<Checkbox disabled />}
            />
          </Stack>
          <Doc.Download />
        </TabsContent>
        <TabsContent value="tab2">
          <Doc.Props {...props} />
        </TabsContent>
        <TabsContent value="tab3">
          <Doc.Versions {...versions} />
        </TabsContent>
      </Tabs>
    </Doc>
  )
}

export default CheckboxPage

const props: PropsProps = {
  link: {
    name: 'Radix doc',
    href: 'https://www.radix-ui.com/docs/primitives/components/checkbox#api-reference',
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
        'Component API is 1 on 1 with Radix and currently there is an indigo6 set as a color, but should be one of the brands colors but none of those are good in both light and dark theme.',
      version: '0.0.1',
    },
    { title: 'Initial', description: 'Initial', version: '0.0.1' },
  ],
}
