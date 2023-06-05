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
            <Text size="xs">Example</Text>
            <Text size="sm">Example</Text>
            <Text size="base">Example</Text>
            <Text size="lg">Example</Text>
          </Stack>
        }
      />
      <DocBlock
        title="TextAlign"
        description="The text alignment example showcases various options for aligning text within a container, including left, right, end, start, center, and justified alignment. "
        canPlay
        exampleWithCode={
          <Stack>
            <Text textAlign="center">Example</Text>
            <Text textAlign="end">Example</Text>
            <Text textAlign="right">Example</Text>
            <Text textAlign="start">Example</Text>
            <Text textAlign="left">Example</Text>
            <Text textAlign="justify">Example</Text>
          </Stack>
        }
      />

      <DocBlock
        title="Color"
        description="The color example illustrates the ability to change the color of text."
        exampleWithCode={
          <Stack>
            <Text color="amber-100">Example</Text>
            <Text color="red-500">Example</Text>
            <Text color="white">Example</Text>
            <Text color="black">Example</Text>
          </Stack>
        }
      />

      <DocBlock
        title="Custom"
        description="Custom example of how to style a text using a Tailwind CSS class"
        exampleWithCode={
          <Text className="leading-9 font-extrabold text-xl text-center text-red-500 ">
            Example
          </Text>
        }
      />
    </DocTemplate>
  )
}
