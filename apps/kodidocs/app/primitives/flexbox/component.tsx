import { DocBlock } from "@/features/docs/DocBlock"
import { DocPane } from "@/features/docs/DocPane"
import { DocTemplate } from "@/templates"

import { FlexBox } from "@/components/primitives/flex-box"
import { Stack } from "@/components/primitives/stack"

export const Component = () => {
  return (
    <DocTemplate install>
      <DocBlock
        title="Flex direction"
        description="The spacing between childrens can be adjusted using the gap prop."
        exampleWithCode={
          <>
            <FlexBox flexDirection="row">
              <DocPane>Element 1</DocPane>
              <DocPane>Element 2</DocPane>
              <DocPane>Element 3</DocPane>
            </FlexBox>
          </>
        }
      />

      <DocBlock
        title="Flex direction"
        description="The spacing between childrens can be adjusted using the gap prop."
        exampleWithCode={
          <>
            <FlexBox flexDirection="rowReverse">
              <DocPane>Element 1</DocPane>
              <DocPane>Element 2</DocPane>
              <DocPane>Element 3</DocPane>
            </FlexBox>
          </>
        }
      />

      <DocBlock
        title="Flex direction"
        description="The spacing between childrens can be adjusted using the gap prop."
        exampleWithCode={
          <>
            <FlexBox flexDirection="col">
              <DocPane>Element 1</DocPane>
              <DocPane>Element 2</DocPane>
              <DocPane>Element 3</DocPane>
            </FlexBox>
          </>
        }
      />

<DocBlock
        title="Flex direction"
        description="The spacing between childrens can be adjusted using the gap prop."
        exampleWithCode={
          <>
            <FlexBox flexDirection="colReverse">
              <DocPane>Element 1</DocPane>
              <DocPane>Element 2</DocPane>
              <DocPane>Element 3</DocPane>
            </FlexBox>
          </>
        }
      />
    </DocTemplate>
  )
}
