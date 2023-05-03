import React from 'react'
import { Doc } from '@/features/documentation'
import { Stack } from '@kodiui/ui'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/tabs/Tabs'
import { Slider } from '@/components/Slider/Slider'

const SliderPage = () => {
  return (
    <Doc>
      <Doc.Header
        title="Slider"
        dependsOn="Radix-ui"
        description="An input where the user selects a value from within a given range. Sliders are ideal components for adjusting settings that reflect intensity levels, such as volume, brightness, or color saturation."
      />
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Component</TabsTrigger>
          <TabsTrigger value="tab2">Props</TabsTrigger>
          <TabsTrigger value="tab3">Versions</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <Stack gap="3xl">
            <Doc.Block exampleWithCode={<Slider defaultValue={[50]} max={100} step={1} />} />{' '}
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

export default SliderPage
