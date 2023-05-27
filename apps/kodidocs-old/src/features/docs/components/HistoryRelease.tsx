import { Badge } from '@cli-components/Badge'
import { Divider } from '@cli-components/Divider'
import { Text } from '@cli-components/Text'
import { HistoryRelease as HistoryReleaseType } from '@gql/graphql'
import { Cluster, Split, Stack } from '@kodiui/ui'

export const HistoryRelease = (props: HistoryReleaseType) => {
  return (
    <Stack>
      <Split>
        <Cluster>
          <Text tone="brandAccent" weight="strong">
            {props.name}
          </Text>
          <Badge>{props.version}</Badge>
        </Cluster>
      </Split>
      <Text>{props.description}</Text>
      <Divider />
    </Stack>
  )
}
