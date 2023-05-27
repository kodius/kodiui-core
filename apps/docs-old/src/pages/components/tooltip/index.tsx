import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Tooltip,
  Button,
  Text,
  TextLink,
  Badge,
} from '@/components'
import { TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/Tooltip/Tooltip'
import { Doc, PropsProps, VersionsProps } from '@/features/documentation'
import { Cluster, Stack } from '@kodiui/ui'
import React from 'react'

const TooltipPage = () => {
  return (
    <Doc>
      <Doc.Header
        title="Tooltip"
        dependsOn="Radix-ui"
        description="A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
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
              description={'Button element with tooltip'}
              note={
                'Use the asChild prop to convert the trigger part into a slottable area. It will replace the trigger with the child that gets passed to it.'
              }
              exampleWithCode={
                <TooltipProvider>
                  <Cluster>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="soft">Element</Button>
                      </TooltipTrigger>
                      <TooltipContent>Tooltip Content</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger>Nativ</TooltipTrigger>
                      <TooltipContent>Tooltip Content</TooltipContent>
                    </Tooltip>
                  </Cluster>
                </TooltipProvider>
              }
            />
            <Doc.Block
              subTitle="Sides"
              description="You can specify side of tooltip, side='left | 'right' | 'top' | 'bottom' "
              exampleWithCode={
                <TooltipProvider>
                  <Cluster>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="soft">Top side</Button>
                      </TooltipTrigger>
                      <TooltipContent>Tooltip Content</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="soft">Bottom side</Button>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">Tooltip Content</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="soft">Left side</Button>
                      </TooltipTrigger>
                      <TooltipContent side="left">Tooltip Content</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="soft">Right side</Button>
                      </TooltipTrigger>
                      <TooltipContent side="right">Tooltip Content</TooltipContent>
                    </Tooltip>
                  </Cluster>
                </TooltipProvider>
              }
            />
            <Doc.Block
              subTitle="Side offset"
              description="The distance in pixels from the trigger., defaults to 4."
              exampleWithCode={
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="soft">side offset 15</Button>
                    </TooltipTrigger>
                    <TooltipContent sideOffset={15}>Tooltip Content</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              }
            />
            <Doc.Block
              subTitle="Other components"
              description="Examples with different component"
              exampleWithCode={
                <TooltipProvider>
                  <Cluster>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Text>Text</Text>
                      </TooltipTrigger>
                      <TooltipContent>Tooltip Content</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Text tone="brand">
                          <TextLink href="#">TextLink</TextLink>
                        </Text>
                      </TooltipTrigger>
                      <TooltipContent>Tooltip Content</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Badge>Badge</Badge>
                      </TooltipTrigger>
                      <TooltipContent>Tooltip Content</TooltipContent>
                    </Tooltip>
                  </Cluster>
                </TooltipProvider>
              }
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

export default TooltipPage

const props: PropsProps = {
  link: {
    name: 'Radix',
    href: 'https://www.radix-ui.com/docs/primitives/components/tooltip#api-reference',
  },
  props: [
    {
      name: 'asChild',
      values: ['boolean, default: false'],
      description:
        'Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.',
    },
    {
      name: 'sideOffset',
      values: ['number, default: 4'],
      description: 'The distance in pixels from the trigger.',
    },
  ],
}
const versions: VersionsProps = {
  versions: [{ title: 'Initial', description: 'Initial', version: '0.0.1' }],
}
