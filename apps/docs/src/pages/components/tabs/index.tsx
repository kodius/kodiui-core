import * as React from 'react'
import { Tabs, TabsList, TabsContent, TabsTrigger, Badge } from '@/components'
import { Doc } from '@/features/documentation'
import { Stack } from '@kodiui/ui'

const TabsPage = () => {
  return (
    <Doc downloadable>
      <Stack>
        <Doc.Title>Tabs</Doc.Title>
        <Badge>@radix-ui/react-tabs</Badge>
      </Stack>
      <Doc.Block
        subTitle="Usage"
        exampleWithCode={
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">Tab1</TabsTrigger>
              <TabsTrigger value="tab2">Tab2</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">Tab1 Content</TabsContent>
            <TabsContent value="tab2">Tab2 Content</TabsContent>
          </Tabs>
        }
      />
    </Doc>
  )
}

export default TabsPage
