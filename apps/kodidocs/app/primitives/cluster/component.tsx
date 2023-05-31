import { DocBlock } from "@/features/docs/DocBlock"
import { DocPane } from "@/features/docs/DocPane"
import { DocTemplate } from "@/templates"

import { Box } from "@/components/primitives/box/box"
import { Cluster } from "@/components/primitives/cluster"

export const Component = () => {
  return (
    <DocTemplate>
      <DocBlock
        canPlay
        title="Example"
        description="Automaticly adjusts its layout, displaying elements in their original size when possible and wrapping them when space is limited. This ensures a seamless and visually appealing user experience across different devices and screen sizes."
        exampleWithCode={
          <Cluster>
            <Element />
            <Element />
            <Element />
            <Element />
            <Element />
            <Element />
            <Element />
            <Element />
            <Element />
            <Element />
            <Element />
            <Element />
            <Element />
            <Element />
            <Element />
          </Cluster>
        }
      />
    </DocTemplate>
  )
}

const Element = () => {
  return (
    <Box style={{ width: Math.random() * 400 + 100 }}>
      <DocPane>Element</DocPane>
    </Box>
  )
}
