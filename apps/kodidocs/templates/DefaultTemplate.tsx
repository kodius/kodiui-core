import { FC, PropsWithChildren } from "react"

import { Box } from "@/components/primitives/box/box"
import { Stack } from "@/components/primitives/stack"
import { Heading } from "@/components/typography/heading"
import { Text } from "@/components/typography/text"

interface Props extends PropsWithChildren {
  title: string | null | undefined
  description?: string | null | undefined
}

export const DefaultTemplate: FC<Props> = (props) => {
  return (
    <Stack gap="xl" className="pb-5xl h-screen overflow-auto">
      <div>
        <Box p="5xl" className="py-md pt-3xl">
          <Stack gap="0">
            <Heading level="2" className="uppercase">
              {props.title}
            </Heading>
            {props.description && <Text tone="muted">{props.description}</Text>}
          </Stack>
        </Box>
        <hr />
      </div>
      <div className="px-5xl">{props.children}</div>
    </Stack>
  )
}
