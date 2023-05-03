import React from 'react'
import { Doc, PropsProps, VersionsProps } from '@/features/documentation'
import { Stack } from '@kodiui/ui'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/Tabs/Tabs'
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
            <Doc.Block
              subTitle="Example"
              exampleWithCode={<Slider defaultValue={[50]} max={100} step={1} />}
            />{' '}
            <Doc.Block
              subTitle="Disabled"
              exampleWithCode={<Slider defaultValue={[50]} max={100} step={1} disabled />}
            />{' '}
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

export default SliderPage

const props: PropsProps = {
  link: {
    name: 'Radix doc',
    href: 'https://www.radix-ui.com/docs/primitives/components/slider#api-reference',
  },
}
const versions: VersionsProps = {
  versions: [
    {
      title: 'Initial component API using Radix and custom styles.',
      description: 'Component API is 1 on 1 with Radix',
      version: '0.0.1',
    },
    { title: 'Initial', description: 'Initial', version: '0.0.1' },
  ],
}
