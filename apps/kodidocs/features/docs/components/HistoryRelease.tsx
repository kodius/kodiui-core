import { Badge } from "@/components/ui/badge"
import { Cluster } from "@/components/primitives/cluster"
import { Split } from "@/components/primitives/split"
import { Stack } from "@/components/primitives/stack"
import { Text } from "@/components/typography/text"

export type HistoryReleaseType = {
  description?: string
  name?: string
  version?: string
}

export const HistoryRelease = (props: HistoryReleaseType) => {
  return (
    <Stack>
      <Split>
        <Cluster>
          <Text weight="bold">{props.name}</Text>
          <Badge>{props.version}</Badge>
        </Cluster>
      </Split>
      <Text>{props.description}</Text>
      <hr />
    </Stack>
  )
}
