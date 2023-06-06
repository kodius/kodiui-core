import { FC } from "react"
import { DocBlock } from "@/features/docs/DocBlock"
import { DocPane, DocPaneProps } from "@/features/docs/DocPane"
import { DocTemplate } from "@/templates"

import { Split } from "@/components/primitives/split"

export const Component = () => {
  return (
    <DocTemplate>
      <DocBlock
        canPlay
        title="Example"
        description="Effortlessly arranges content in a side-by-side layout, automatically adapting to available space by adjusting the size and positioning of each section. This ensures a visually pleasing and responsive user experience on various devices and screen sizes."
        exampleWithCode={
          <Split>
            <Element />
            <Element />
          </Split>
        }
      />
    </DocTemplate>
  )
}

const Element: FC<DocPaneProps> = (props) => {
  return (
    <DocPane
      className="bg-secondary border-gray-600 rounded border w-80"
      {...props}
    >
      Element
    </DocPane>
  )
}
