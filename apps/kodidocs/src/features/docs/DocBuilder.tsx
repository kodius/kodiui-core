import { Tabs, TabsContent, TabsList, TabsTrigger } from '@cli-components/Tabs/Tabs'
import { HistoryRelease as HistoryReleaseType } from '@gql/graphql'
import { Stack } from '@kodiui/ui'
import React, { FC, ReactNode } from 'react'
import { HistoryRelease } from './components/HistoryRelease'
import { PropsType } from '@features/documentation'
import { Prop } from '@features/documentation/component/Prop'
import { TextLink } from '@cli-components/TextLink'
import { Text } from '@cli-components/Text'

interface Props {
  componentTab: ReactNode
  historyReleases: HistoryReleaseType[]
  versionsTab: ReactNode
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
        <TabsContent value="tab1">{props.componentTab}</TabsContent>
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
            {props.historyReleases?.map((history) => (
              // this is not an error. Typescirpt dose not know about server components
              // @ts-expect-error Server Component
              <HistoryRelease {...history} />
            ))}
          </Stack>
        </TabsContent>
      </Tabs>
    </Stack>
  )
}
