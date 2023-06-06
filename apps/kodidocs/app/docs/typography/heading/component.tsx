import { DocBlock } from "@/features/docs/DocBlock"
import { DocTemplate } from "@/templates"

import { Heading } from "@/components/typography/heading"

export const Component = () => {
  return (
    <DocTemplate>
      <DocBlock
        title="Level"
        description="
        The heading with levels example demonstrates the use of different heading levels to structure and organize content hierarchically, improving readability and accessibility."
        exampleWithCode={
          <>
            <Heading level="1">Example</Heading>
            <Heading level="2">Example</Heading>
            <Heading level="3">Example</Heading>
            <Heading level="4">Example</Heading>
          </>
        }
      />
      <DocBlock
        title="TextAlign"
        description="The text alignment example showcases various options for aligning text within a container, including left, right, end, start, center, and justified alignment. "
        canPlay
        exampleWithCode={
          <>
            <Heading textAlign="center">Example</Heading>
            <Heading textAlign="end">Example</Heading>
            <Heading textAlign="right">Example</Heading>
            <Heading textAlign="start">Example</Heading>
            <Heading textAlign="left">Example</Heading>
            <Heading textAlign="justify">Example</Heading>
          </>
        }
      />

      <DocBlock
        title="Color"
        description="The color example illustrates the ability to change the color of headings."
        exampleWithCode={
          <>
            <Heading color="amber-100">Example</Heading>
            <Heading color="red-500">Example</Heading>
            <Heading color="white">Example</Heading>
            <Heading color="black">Example</Heading>
          </>
        }
      />

      <DocBlock
        title="Custom"
        description="Custom example of how to style a heading using a Tailwind CSS class"
        exampleWithCode={
          <Heading className="leading-9 font-extrabold text-center text-red-500 ">
            Example
          </Heading>
        }
      />
    </DocTemplate>
  )
}
