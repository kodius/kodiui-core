import { FC } from "react"
import { DocBlock } from "@/features/docs/DocBlock"
import { DocPane, DocPaneProps } from "@/features/docs/DocPane"
import { DocTemplate } from "@/templates"

import { Box } from "@/components/primitives/box/box"

export const Component = () => {
  return (
    <DocTemplate>
      <DocBlock
        canPlay
        title="Todo"
        description="A master component"
        exampleWithCode={
          <Box>
            <Element />
          </Box>
        }
      />
    </DocTemplate>
  )
}

const Element: FC<DocPaneProps> = (props) => {
  return <DocPane {...props}>Element</DocPane>
}
