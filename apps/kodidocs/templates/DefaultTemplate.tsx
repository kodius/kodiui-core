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
        <Box p="5xl" className="pb-5xl">
          <Stack gap="xs">
            <Heading level="1" className="uppercase">
              {props.title}
            </Heading>
            {props.description && <Text>{props.description}</Text>}
          </Stack>
        </Box>
        <hr />
      </div>
      <Box color="white" px="5xl">
        {props.children}
      </Box>
    </Stack>
  )
}
