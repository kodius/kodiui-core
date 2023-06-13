import { FC } from "react"
import { DocBlock } from "@/features/docs/DocBlock"
import { DocPane, DocPaneProps } from "@/features/docs/DocPane"
import { DocTemplate } from "@/templates"

import { Hidden } from "@/components/primitives/hidden"
import { Text } from "@/components/typography/text"

export const Component = () => {
  return (
    <DocTemplate>
      <Text size="sm" color="muted">
        * resize screen to see changes
      </Text>
      <DocBlock
        title="Above"
        description="You can hide element for devices above lg screens."
        exampleWithCode={
          <Hidden above="lg">
            <Element />
          </Hidden>
        }
      />
      <DocBlock
        title="Below"
        description="You can hide element for devices below md screens."
        exampleWithCode={
          <Hidden below="md">
            <Element />
          </Hidden>
        }
      />
      <DocBlock
        title="Above & Below"
        description="Also, you can make element visible from md to lg screens"
        exampleWithCode={
          <Hidden below="md" above="lg">
            <Element />
          </Hidden>
        }
      />
      <DocBlock
        title="Target only one screen"
        description="If you want to show element only for md screen."
        exampleWithCode={
          <Hidden below="md" above="md">
            <Element />
          </Hidden>
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
