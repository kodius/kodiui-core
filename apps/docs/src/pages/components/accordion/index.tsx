import React from 'react'
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Button,
} from '@/components'
import { Doc, PropsProps, VersionsProps } from '@/features/documentation'
import { Stack, Switcher } from '@kodiui/ui'

const AccordionPage = () => {
  return (
    <Doc>
      <Doc.Header
        title="Accordion"
        dependsOn="Radix-ui"
        description="A vertically stacked set of interactive headings that each reveal an associated section of content."
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
              description={`Example with components`}
              exampleWithCode={
                <Accordion type="single">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Item 1</AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum
                      sint consectetur cupidatat.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Item 2</AccordionTrigger>
                    <AccordionContent>
                      <Stack>
                        <Switcher>
                          <Doc.Pane>Pane 1</Doc.Pane>
                          <Doc.Pane>Pane 2</Doc.Pane>
                          <Doc.Pane>Pane 3</Doc.Pane>
                        </Switcher>
                        <Button>Button</Button>
                      </Stack>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Item 3</AccordionTrigger>
                    <AccordionContent>
                      <Stack>
                        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum
                        sint consectetur cupidatat.
                        <Button>Testing</Button>
                      </Stack>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              }
            />
            <Doc.Block
              subTitle="Types"
              description={`Single or multiple`}
              exampleWithCode={
                <Stack>
                  <Stack>
                    <Doc.Description>Single</Doc.Description>
                    <Accordion type="single">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Item 1</AccordionTrigger>
                        <AccordionContent>
                          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum
                          sint consectetur cupidatat.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Item 2</AccordionTrigger>
                        <AccordionContent>
                          <Stack>
                            <Doc.Pane>Pane 1</Doc.Pane>
                            <Doc.Pane>Pane 2</Doc.Pane>
                          </Stack>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </Stack>
                  <Stack>
                    <Doc.Description>Multiple</Doc.Description>
                    <Accordion type="multiple">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Item 1</AccordionTrigger>
                        <AccordionContent>
                          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum
                          sint consectetur cupidatat.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Item 2</AccordionTrigger>
                        <AccordionContent>
                          <Stack>
                            <Doc.Pane>Pane 1</Doc.Pane>
                            <Doc.Pane>Pane 2</Doc.Pane>
                          </Stack>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </Stack>
                </Stack>
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

export default AccordionPage

const props: PropsProps = {
  link: {
    name: 'Radix doc',
    href: 'https://www.radix-ui.com/docs/primitives/components/accordion#api-reference',
  },
  props: [],
}
const versions: VersionsProps = {
  versions: [{ title: 'Initial', description: 'Initial', version: '0.0.1' }],
}
