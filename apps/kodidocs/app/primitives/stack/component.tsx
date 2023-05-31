import { FC } from "react"
import { DocBlock } from "@/features/docs/DocBlock"
import { DocPane, DocPaneProps } from "@/features/docs/DocPane"
import { DocTemplate } from "@/templates"

import { Box } from "@/components/primitives/box/box"
import { Stack } from "@/components/primitives/stack"

export const Component = () => {
  return (
    <DocTemplate install>
      <DocBlock
        canPlay
        title="Piemwrewr"
        description="asdfdsaf"
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
      <DocBlock
        canPlay
        title="Piemwrewr"
        description="asdfdsaf"
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
