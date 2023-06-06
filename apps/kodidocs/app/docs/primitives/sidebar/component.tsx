import { DocBlock } from "@/features/docs/DocBlock"
import { DocPane, DocPaneProps } from "@/features/docs/DocPane"
import { DocTemplate } from "@/templates"

import { Sidebar } from "@/components/primitives/sidebar"

export const Component = () => {
  return (
    <DocTemplate>
      <DocBlock
        canPlay
        title="Side - right"
        description="The Sidebar layout enables a responsive design with a fixed-width sidebar positioned on the right"
        exampleWithCode={
          <Sidebar side="right">
            <DocPane>Element</DocPane>
            <DocPane className="basis-60">Element</DocPane>
          </Sidebar>
        }
      />
      <DocBlock
        canPlay
        title="Side - left"
        description="The Sidebar layout enables a responsive design with a fixed-width sidebar positioned on the left."
        exampleWithCode={
          <Sidebar side="left">
            <DocPane className="basis-60">Element</DocPane>
            <DocPane>Element</DocPane>
          </Sidebar>
        }
      />

      <DocBlock
        canPlay
        title="Gap"
        description="The gap property allows for easy and consistent spacing between elements within a container. All values of gap prop you can see on props tab."
        exampleWithCode={
          <Sidebar gap="3xl">
            <DocPane className="basis-60">Element</DocPane>
            <DocPane>Element</DocPane>
          </Sidebar>
        }
      />
    </DocTemplate>
  )
}
