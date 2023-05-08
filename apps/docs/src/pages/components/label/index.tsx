import React from 'react'
import { Divider, Input, Tabs, TabsContent, TabsList, TabsTrigger } from '@/components'
import { Label } from '@/components/inputs/Label/Label'
import { Doc } from '@/features/documentation'
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
                  <Divider weight="regular" tone="neutral" />
                  <Stack gap="0">
                    <Label htmlFor="checkbox">Label</Label>
                    <Checkbox id="checkbox" name="checkbox" />
                  </Stack>
                  <Divider weight="regular" tone="neutral" />
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
          <>props</>
        </TabsContent>
        <TabsContent value="tab3">
          <>vers</>
        </TabsContent>
      </Tabs>
    </Doc>
  )
}

export default LabelPage
