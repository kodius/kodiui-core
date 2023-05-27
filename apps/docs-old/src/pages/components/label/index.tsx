import React from 'react'
import { Input, Tabs, TabsContent, TabsList, TabsTrigger } from '@/components'
import { Label } from '@/components/inputs/Label/Label'
import { Doc, PropsProps, VersionsProps } from '@/features/documentation'
import { Stack } from '@kodiui/ui'
import { Checkbox } from '@/components/inputs/Checkbox/Checkbox'
import { Slider } from '@/components/Slider/Slider'

const LabelPage = () => {
  return (
    <Doc>
      <Doc.Header
        title="Label"
        dependsOn="Radix-ui"
        description="Label represents a caption for an items in a user interface"
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
              subTitle="Example with different inputs"
              exampleWithCode={
                <Stack>
                  <Stack gap="0">
                    <Label htmlFor="input">Label</Label>
                    <Input id="input" name="input" placeholder="Placeholder" controlled />
                  </Stack>
                  <Stack gap="0">
                    <Label htmlFor="checkbox">Label</Label>
                    <Checkbox id="checkbox" name="checkbox" />
                  </Stack>
                  <Stack gap="0">
                    <Label htmlFor="slider">Label</Label>
                    <Slider id="slider" name="slider" />
                  </Stack>
                </Stack>
              }
            />
          </Stack>
          <Doc.Download />
        </TabsContent>
        <TabsContent value="tab2">
          <Doc.Props {...props}>props</Doc.Props>
        </TabsContent>
        <TabsContent value="tab3">
          <Doc.Versions {...versions}>vers</Doc.Versions>
        </TabsContent>
      </Tabs>
    </Doc>
  )
}

export default LabelPage
const props: PropsProps = {
  link: {
    name: 'Radix doc',
    href: 'https://www.radix-ui.com/docs/primitives/components/label#api-reference',
  },
}
const versions: VersionsProps = {
  versions: [
    {
      title: 'Initial component API using Radix and custom styles.',
      description: 'Component API is 1 on 1 with Radix.',
      version: '0.0.1',
    },
    { title: 'Initial', description: 'Initial', version: '0.0.1' },
  ],
}
