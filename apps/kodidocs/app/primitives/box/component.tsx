import { DocBlock } from "@/features/docs/DocBlock"
import { DocTemplate } from "@/templates"

import { Box } from "@/components/primitives/box/box"
import { Stack } from "@/components/primitives/stack"

export const Component = () => {
  return (
    <DocTemplate>
      <DocBlock
        title="Master"
        description="The Box component is useful because it helps with three common use cases: Create responsive layouts with ease. Provide a shorthand way to pass styles via props (bg instead of backgroundColor). Compose new component and allow for override using the as prop."
        exampleWithCode={
          <Stack>
            <Box background="gray-800" p="lg">
              Element
            </Box>
          </Stack>
        }
      />
    </DocTemplate>
  )
}
