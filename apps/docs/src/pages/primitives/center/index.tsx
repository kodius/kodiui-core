import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components'

import { Doc, PropsProps, VersionsProps } from '@/features/documentation'

import { Center, Box } from '@kodiui/ui'

const CenterPage = () => {
  return (
    <Doc>
      <Doc.Header
        title="Center"
        description="Center is a layout component that centers its child within itself."
      />

      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Component</TabsTrigger>
          <TabsTrigger value="tab2">Props</TabsTrigger>
          <TabsTrigger value="tab3">Versions</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <Doc.Block
            subTitle="Horizontal"
            description="Used to horizontally center an element"
            exampleWithCode={
              <Box height={'40'}>
                <Center>
                  <Doc.Pane>Element</Doc.Pane>
                </Center>
              </Box>
            }
          />
          <Doc.Block
            subTitle="Vertical"
            description="Used to vertically center an element"
            exampleWithCode={
              <Box height={'40'}>
                <Center direction="vertical">
                  <Doc.Pane>Element</Doc.Pane>
                </Center>
              </Box>
            }
          />
          <Doc.Block
            subTitle="Center"
            description="Used to horizontally and vertically center an element"
            exampleWithCode={
              <Box height={'40'}>
                <Center direction="center">
                  <Doc.Pane>Element</Doc.Pane>
                </Center>
              </Box>
            }
          />
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

export default CenterPage

const props: PropsProps = {
  props: [
    {
      name: 'direction',
      values: ['center', 'horizontal', 'vertical'],
      description: 'The direction of centering can be adjusted using the direcrtion prop.',
    },
  ],
}
const versions: VersionsProps = {
  versions: [{ title: 'Initial', description: 'Initial', version: '0.0.1' }],
}
