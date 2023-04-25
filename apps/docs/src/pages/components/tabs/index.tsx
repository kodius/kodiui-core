import * as React from 'react'
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/tabs/tabs'
import { Doc } from '@/features/documentation'

const TabsPage = () => {
  return (
    <Doc>
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
