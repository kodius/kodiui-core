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
    <Stack gap="xl" className="h-screen overflow-scroll">
      <div>
        <div className="p-2xl">
          <Stack gap="md">
            <Heading level="2" className="uppercase">
              {props.title}
            </Heading>
            {props.description && <Text tone="muted">{props.description}</Text>}
          </Stack>
        </div>
        <hr />
      </div>
      <div className="p-xl">{props.children}</div>
    </Stack>
  )
}
