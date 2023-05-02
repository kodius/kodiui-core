import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components'
import { Doc } from '@/features/documentation'
import { Space, Stack } from '@kodiui/ui'
import React from 'react'

const StackPage = () => {
  return (
    <Doc>
      <Doc.Header
        title="Stack"
        dependsOn="Radix-ui"
        description="Stack is a container component for arranging elements vertically"
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
              description={`The spacing between childrens can be adjusted using the gap prop.`}
              exampleWithCode={
                <Stack>
                  <Doc.Pane>Element 1</Doc.Pane>
                  <Doc.Pane>Element 2</Doc.Pane>
                  <Doc.Pane>Element 3</Doc.Pane>
                </Stack>
              }
            />
            <Doc.Block
              subTitle="Resposive properties"
              description="You can set responsive properties as gap={{ mobile: '5xxl', desktop: 'sm' }}"
              exampleWithCode={
                <Stack gap={{ mobile: '5xxl', desktop: 'sm' }}>
                  <Doc.Pane>Element 1</Doc.Pane>
                  <Doc.Pane>Element 2</Doc.Pane>
                  <Doc.Pane>Element 3</Doc.Pane>
                </Stack>
              }
            />
          </Stack>
          <Doc.Download />
        </TabsContent>
        <TabsContent value="tab2">
          <Doc.Props
            link={{
              name: 'Radix doc',
              href: 'https://www.radix-ui.com/docs/primitives/components/context-menu#root',
            }}
            props={[
              {
                name: 'gap',
                values: Object.keys(Space).map((space) => space),
                description: 'The spacing between childrens can be adjusted using the gap prop.',
              },
            ]}
          />
        </TabsContent>
        <TabsContent value="tab3">
          <Doc.Versions
            versions={[
              {
                title: 'Resposive values',
                description:
                  "You can set responsive properties as gap={{ mobile: '5xxl', desktop: 'sm' }}",
                version: '0.0.2',
              },
              { title: 'Initial', description: 'Initial', version: '0.0.1' },
            ]}
          />
        </TabsContent>
      </Tabs>
    </Doc>
  )
}

export default StackPage

export type Type = 'flex-start' | 'flex-end' | 'center' | 'baseline'
