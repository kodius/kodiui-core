import { DocBlock } from "@/features/docs/DocBlock"
import { DocTemplate } from "@/templates"

import { Stack } from "@/components/primitives/stack"
import { Text } from "@/components/typography/text"

export const Component = () => {
  return (
    <DocTemplate>
      <DocBlock
        title="Size"
        description="
        Adjust the font size of text using predefined sizes: xs, sm, base, and lg, providing flexibility and consistency for typography."
        exampleWithCode={
          <Stack>
            <Text size="lg">Size lg</Text>
            <Text size="base">Size base</Text>
            <Text size="sm">Sixe sm</Text>
            <Text size="xs">Size xs</Text>
          </Stack>
        }
      />
      <DocBlock
        title="TextAlign"
        description="The text alignment example showcases various options for aligning text within a container, including left, right, end, start, center, and justified alignment. "
        canPlay
        exampleWithCode={
          <Stack>
            <Text textAlign="center">Center</Text>
            <Text textAlign="end">End</Text>
            <Text textAlign="right">Right</Text>
            <Text textAlign="start">Start</Text>
            <Text textAlign="left">Left</Text>
            <Text textAlign="justify">Jusitfy</Text>
          </Stack>
        }
      />

      <DocBlock
        title="Color"
        description="The color example illustrates the ability to change the color of text."
        exampleWithCode={
          <Stack>
            <Text tone="base">Example</Text>
            <Text tone="base">Example</Text>
            <Text tone="base">Example</Text>
            <Text tone="base">Example</Text>
          </Stack>
        }
      />

      <DocBlock
        title="Custom"
        description="Custom example of how to style a text using a Tailwind CSS class"
        exampleWithCode={
          <Text className="leading-9 font-extrabold text-xl text-center text-amber-100 ">
            Example
          </Text>
        }
      />
    </DocTemplate>
  )
}
