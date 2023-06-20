import { DocBlock } from "@/features/docs/DocBlock"
import { DocPane } from "@/features/docs/DocPane"
import { DocTemplate } from "@/templates"

import { Box } from "@/components/primitives/box/box"
import { FlexBox } from "@/components/primitives/flex-box"
import { flexVariants } from "@/styles/tokens/flex"

export const Component = () => {
  const test = flexVariants()
  console.log("sdfsdfsf")

  console.log(test, "asdfsdfsdaff")

  return (
    <DocTemplate install>
      <DocBlock
        title="Flex direction - row"
        description="Flexbox with flex direction row enables horizontal arrangement of elements  within a container"
        exampleWithCode={
          <FlexBox flexDirection="row">
            <DocPane>Element 1</DocPane>
            <DocPane>Element 2</DocPane>
            <DocPane>Element 3</DocPane>
          </FlexBox>
        }
      />

      <DocBlock
        title="Flex direction - rowReverse"
        description="Flexbox with flex direction row reverse allows for a reversed horizontal arrangement of elements within a container"
        exampleWithCode={
          <FlexBox flexDirection="rowReverse">
            <DocPane>Element 1</DocPane>
            <DocPane>Element 2</DocPane>
            <DocPane>Element 3</DocPane>
          </FlexBox>
        }
      />

      <DocBlock
        title="Flex direction - col"
        description="Flexbox with flex direction column creates a vertical arrangement of elements within a container"
        exampleWithCode={
          <FlexBox flexDirection="col">
            <DocPane>Element 1</DocPane>
            <DocPane>Element 2</DocPane>
            <DocPane>Element 3</DocPane>
          </FlexBox>
        }
      />

      <DocBlock
        title="Flex direction - colReverse"
        description="Flexbox with flex direction column reverse allows for a reversed vertical arrangement of elements within a container"
        exampleWithCode={
          <FlexBox flexDirection="colReverse">
            <DocPane>Element 1</DocPane>
            <DocPane>Element 2</DocPane>
            <DocPane>Element 3</DocPane>
          </FlexBox>
        }
      />

      <DocBlock
        title="Gap"
        description="The gap property in Flexbox allows for easy and consistent spacing between elements within a container. All values of gap prop you can see on props tab."
        exampleWithCode={
          <FlexBox gap="3xl">
            <DocPane>Element 1</DocPane>
            <DocPane>Element 2</DocPane>
            <DocPane>Element 3</DocPane>
          </FlexBox>
        }
      />

      <DocBlock
        title="Flex-wrap - wrap"
        canPlay
        description="Wrap is a Flexbox property that allows flex items to wrap onto multiple lines within a container when there is not enough space."
        exampleWithCode={
          <FlexBox wrap="wrap">
            <DocPane>Element 1</DocPane>
            <DocPane>Element 2</DocPane>
            <DocPane>Element 3</DocPane>
          </FlexBox>
        }
      />

      <DocBlock
        title="Flex-wrap - wrapReverse"
        canPlay
        description="WrapReverse is a Flexbox property that enables flex items to wrap onto multiple lines within a container in a reverse order."
        exampleWithCode={
          <FlexBox wrap="wrapReverse">
            <DocPane>Element 1</DocPane>
            <DocPane>Element 2</DocPane>
            <DocPane>Element 3</DocPane>
          </FlexBox>
        }
      />

      <DocBlock
        title="Flex-wrap - nowrap"
        canPlay
        description="Nowrap is a Flexbox property that ensures flex items remain on a single line within a container."
        exampleWithCode={
          <FlexBox wrap="nowrap">
            <DocPane>Element 1</DocPane>
            <DocPane>Element 2</DocPane>
            <DocPane>Element 3</DocPane>
          </FlexBox>
        }
      />
    </DocTemplate>
  )
}
