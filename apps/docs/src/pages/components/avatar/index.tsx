import React from 'react'
import { Doc, PropsProps, VersionsProps } from '@/features/documentation'
import {
  AvatarFallback,
  AvatarImage,
  Avatar,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components'
import { Cluster } from '@kodiui/ui'

const AvatarPage = () => {
  return (
    <Doc>
      <Doc.Header
        title="Avatar"
        dependsOn="Radix-ui"
        description="An image element with a fallback representing the user/profile."
      />
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Component</TabsTrigger>
          <TabsTrigger value="tab2">Props</TabsTrigger>
          <TabsTrigger value="tab3">Versions</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <Doc.Block
            subTitle="Basic examples"
            description="Avatar behavior when the image properly loads and the fallback which renders when the image fails to load."
            exampleWithCode={
              <Cluster>
                <Avatar>
                  <AvatarImage
                    className="AvatarImage"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt="Colm Tuite"
                  />
                  <AvatarFallback delayMs={600}>CT</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>CT</AvatarFallback>
                </Avatar>
              </Cluster>
            }
          />
          <Doc.Download />
        </TabsContent>
        <TabsContent value="tab2">
          <Doc.Props {...props}>props</Doc.Props>
        </TabsContent>
        <TabsContent value="tab3">
          <Doc.Versions {...versions} />
        </TabsContent>
      </Tabs>
    </Doc>
  )
}

export default AvatarPage

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
