import { FC } from "react"
import { DocBlock } from "@/features/docs/DocBlock"
import { DocPane, DocPaneProps } from "@/features/docs/DocPane"
import { DocTemplate } from "@/templates"

import { Box } from "@/components/primitives/box/box"
import { Center } from "@/components/primitives/center"
import { Stack } from "@/components/primitives/stack"

export const Component = () => {
  return (
    <DocTemplate>
      <DocBlock
        canPlay
        title="Horizontal"
        description="Efficiently aligns child elements horizontally within a container"
        exampleWithCode={
          <Box height="44">
            <Center>
              <Element />
            </Center>
          </Box>
        }
      />

      <DocBlock
        canPlay
        title="Vertical"
        description="Efficiently aligns child elements vertically within a container"
        exampleWithCode={
          <Box height="44">
            <Center direction="vertical">
              <Element />
            </Center>
          </Box>
        }
      />

      <DocBlock
        canPlay
        title="Center"
        description="Efficiently aligns child elements horizontally and vertically within a container"
        exampleWithCode={
          <Box height="44">
            <Center direction="center">
              <Element />
            </Center>
          </Box>
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
