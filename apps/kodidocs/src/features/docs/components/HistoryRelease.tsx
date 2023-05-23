import { Badge } from '@cli-components/Badge'
import { Divider } from '@cli-components/Divider'
import { Text } from '@cli-components/Text'
import { ifHaveServerSession } from '@features/auth'
import { HistoryRelease as HistoryReleaseType } from '@gql/graphql'
import { Cluster, Split, Stack } from '@kodiui/ui'
import { VersionSettings } from './VersionSettings'

export const HistoryRelease = async (props: HistoryReleaseType) => {
  const ifHaveSession = await ifHaveServerSession()
  return (
    <Stack>
      <Split>
        <Cluster>
          <Text tone="brandAccent" weight="strong">
            {props.name}
          </Text>
          <Badge>{props.version}</Badge>
        </Cluster>
        {ifHaveSession && <VersionSettings />}
      </Split>
      <Text>{props.description}</Text>
      <Divider />
    </Stack>
  )
}
