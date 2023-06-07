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
            <Heading level="1">Level 1</Heading>
            <Heading level="2">Level 2</Heading>
            <Heading level="3">Level 3</Heading>
            <Heading level="4">Level 4</Heading>
          </>
        }
      />
      <DocBlock
        title="TextAlign"
        description="The text alignment example showcases various options for aligning text within a container, including left, right, end, start, center, and justified alignment. "
        canPlay
        exampleWithCode={
          <>
            <Heading textAlign="center">Center</Heading>
            <Heading textAlign="end">End</Heading>
            <Heading textAlign="right">Right</Heading>
            <Heading textAlign="start">Start</Heading>
            <Heading textAlign="left">Left</Heading>
            <Heading textAlign="justify">Jutify</Heading>
          </>
        }
      />

      <DocBlock
        title="Color"
        description="The color example illustrates the ability to change the color of headings."
        exampleWithCode={
          <>
            {/* <Heading color="amber-100">Amber-100</Heading> */}
            {/* <Heading color="red-500">Red-500</Heading> */}
            {/* <Heading color="white">White</Heading> */}
            {/* <Heading color="black">Black</Heading> */}
          </>
        }
      />

      <DocBlock
        title="Custom"
        description="Custom example of how to style a heading using a Tailwind CSS class"
        exampleWithCode={
          <Heading className="leading-9 font-extrabold text-center text-red-500 ">
            Custom Text
          </Heading>
        }
      />
    </DocTemplate>
  )
}
