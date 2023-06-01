import { DocBlock } from "@/features/docs/DocBlock"
import { DocPane } from "@/features/docs/DocPane"
import { DocTemplate } from "@/templates"

import { Box } from "@/components/primitives/box/box"
import { Switcher } from "@/components/primitives/switcher"

export const Component = () => {
  return (
    <DocTemplate>
      <DocBlock
        canPlay
        title="Example"
        description=""
        exampleWithCode={
          <Switcher>
            <DocPane width="36">Element</DocPane>
            <DocPane width="80">Element</DocPane>
            <DocPane width="64">Element</DocPane>
          </Switcher>
        }
      />
    </DocTemplate>
  )
}
