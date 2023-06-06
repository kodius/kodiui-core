import { DocBlock } from "@/features/docs/DocBlock"
import { DocPane } from "@/features/docs/DocPane"
import { DocTemplate } from "@/templates"

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
            <DocPane>Element</DocPane>
            <DocPane>Element</DocPane>
            <DocPane>Element</DocPane>
          </Switcher>
        }
      />
      <DocBlock
        canPlay
        title="Example with witht"
        description=""
        exampleWithCode={
          <Switcher>
            <DocPane className="w-64">Element</DocPane>
            <DocPane className="w-64">Element</DocPane>
            <DocPane className="w-64">Element</DocPane>
          </Switcher>
        }
      />
    </DocTemplate>
  )
}
