import { Tabs, TabsContent, TabsList, TabsTrigger } from '@cli-components/Tabs/Tabs'
import { Stack } from '@kodiui/ui'
import React, { FC, ReactNode } from 'react'
import { HistoryRelease } from './components/HistoryRelease'
import { PropsType } from '@features/documentation'
import { Prop } from '@features/documentation/component/Prop'
import { TextLink } from '@cli-components/TextLink'
import { Text } from '@cli-components/Text'
import { Version } from '@types'

interface Props {
  component: ReactNode
  versions: Version[]
  props: PropsType
}

export const DocBuilder: FC<Props> = (props) => {
  return (
    <Stack gap="xl">
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Component</TabsTrigger>
          <TabsTrigger value="tab2">Props</TabsTrigger>
          <TabsTrigger value="tab3">Versions</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">{props.component}</TabsContent>
        <TabsContent value="tab2">
          <Stack>
            {props.props.link && (
              <Text tone="brand">
                <TextLink href={props.props.link.href}>{props.props.link.name}</TextLink>
              </Text>
            )}
            {props.props?.props?.map((prop) => (
              <React.Fragment key={prop.name}>
                <Prop {...prop} />
              </React.Fragment>
            ))}
          </Stack>
        </TabsContent>
        <TabsContent value="tab3">
          <Stack>
            {props.versions?.map((version) => (
              // this is not an error. Typescirpt dose not know about server components
              // @ts-expect-error Server Component
              <HistoryRelease {...version} />
            ))}
          </Stack>
        </TabsContent>
      </Tabs>
    </Stack>
  )
}
