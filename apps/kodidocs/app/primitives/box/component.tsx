import { FC } from "react"
import { DocBlock } from "@/features/docs/DocBlock"
import { DocPane, DocPaneProps } from "@/features/docs/DocPane"
import { DocTemplate } from "@/templates"

import { Box } from "@/components/primitives/box/box"
import { Stack } from "@/components/primitives/stack"

export const Component = () => {
  return (
    <DocTemplate>
      <DocBlock
        canPlay
        title="Master"
        description="The Box component is useful because it helps with three common use cases:
Create responsive layouts with ease.
Provide a shorthand way to pass styles via props (bg instead of backgroundColor).
Compose new component and allow for override using the as prop."
        exampleWithCode={
          <Stack>
            <Box display="flex" gap="md" flexWrap="wrap">
              <Element />
              <Element />
            </Box>
            <Box display="flex" gap="md">
              <Element />
              <Element />
              <Element />
              <Element />
            </Box>
          </Stack>
        }
      />
    </DocTemplate>
  )
}

const Element: FC<DocPaneProps> = (props) => {
  return (
    <DocPane
      className="bg-secondary border-gray-600 rounded border w-2/5"
      {...props}
    >
      Element
    </DocPane>
  )
}
