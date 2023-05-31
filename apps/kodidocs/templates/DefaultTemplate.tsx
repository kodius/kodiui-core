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
    <Stack gap="xl" height="screen" overflow="auto" className="pb-5xl">
      <div>
        <Box p="5xl" py="md" pt="3xl">
          <Stack gap="0">
            <Heading level="2" className="uppercase">
              {props.title}
            </Heading>
            {props.description && <Text tone="muted">{props.description}</Text>}
          </Stack>
        </Box>
        <hr />
      </div>
      <Box px="5xl">{props.children}</Box>
    </Stack>
  )
}
