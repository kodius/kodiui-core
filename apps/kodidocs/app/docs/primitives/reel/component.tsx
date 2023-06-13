import { FC } from "react"
import { DocBlock } from "@/features/docs/DocBlock"
import { DocPane, DocPaneProps } from "@/features/docs/DocPane"
import { DocTemplate } from "@/templates"

import { Center } from "@/components/primitives/center"
import { Reel } from "@/components/primitives/reel"

export const Component = () => {
  return (
    <DocTemplate>
      <DocBlock
        canPlay
        title="Example"
        description="The Reel component is a dynamic and customizable UI element that allows for horizontal scrolling. Enhance your application or website with engaging content displays"
        exampleWithCode={
          <Reel>
            <Element></Element>
            <Element></Element>
            <Element></Element>
            <Element></Element>
          </Reel>
        }
      />

      <DocBlock
        canPlay
        title="Hide scrollbar"
        description="Example with hidden scrollbar"
        exampleWithCode={
          <Reel noBar>
            <Element></Element>
            <Element></Element>
            <Element></Element>
            <Element></Element>
          </Reel>
        }
      />

      <DocBlock
        canPlay
        title="Gap"
        description="The gap property allows for easy and consistent spacing between elements within a container. All values of gap prop you can see on props tab."
        exampleWithCode={
          <Reel gap="3xl">
            <Element></Element>
            <Element></Element>
            <Element></Element>
            <Element></Element>
          </Reel>
        }
      />

      <DocBlock
        canPlay
        title="Padding"
        description="The padding property provides consistent spacing within an element's content area. Check the props tab for available values."
        exampleWithCode={
          <Reel p={"3xl"}>
            <Element></Element>
            <Element></Element>
            <Element></Element>
            <Element></Element>
          </Reel>
        }
      />

      <DocBlock
        canPlay
        title="Style of each Element"
        description="Example for adding custom style on every element in Reel with adding '[&>*]:' before class"
        exampleWithCode={
          <Reel className="[&>*]:min-w-[18rem] [&>*]:uppercase">
            <Element></Element>
            <Element></Element>
            <Element></Element>
            <Element></Element>
          </Reel>
        }
      />
    </DocTemplate>
  )
}

const Element: FC<DocPaneProps> = (props) => {
  return (
    <DocPane
      className="bg-secondary flex items-center justify-center border-gray-600 rounded border h-44 min-w-[200px]"
      {...props}
    >
      Element
    </DocPane>
  )
}
