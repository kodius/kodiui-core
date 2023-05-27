import * as React from 'react'
import { Doc, PropsProps, VersionsProps } from '@/features/documentation'
import { ProgressBar, Tabs, TabsContent, TabsList, TabsTrigger } from '@/components'
import { Stack } from '@kodiui/ui'
import { Slider } from '@/components/Slider/Slider'

const ProgressBarPage = () => {
  const [barValue, toggleValue] = React.useState([50])
  return (
    <Doc>
      <Doc.Header
        title="ProgressBar"
        dependsOn="Radix-ui"
        description="A progress bar provides feedback about the duration and progression of a process, such as a download, file transfer, or installation, to indicate how long a user will be waiting."
      />
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Component</TabsTrigger>
          <TabsTrigger value="tab2">Props</TabsTrigger>
          <TabsTrigger value="tab3">Versions</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <Stack>
            {/* TODO: Replace with Label when done */}
            <label htmlFor="barVolume">Bar Volume</label>
            <Slider
              id="barVolume"
              name="barVolume"
              defaultValue={barValue}
              max={100}
              step={1}
              onValueChange={(value) => toggleValue(value)}
            />
            <Doc.Block
              subTitle="Example"
              description="Basic Example"
              exampleWithCode={<ProgressBar value={barValue[0]} />}
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

export default ProgressBarPage

const props: PropsProps = {
  link: {
    name: 'Radix doc',
    href: 'https://www.radix-ui.com/docs/primitives/components/progress#api-reference',
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
