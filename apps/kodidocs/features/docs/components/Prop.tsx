import React, { FC } from "react"

import { Cluster } from "@/components/primitives/cluster"
import { Stack } from "@/components/primitives/stack"
import { Text } from "@/components/typography/text"

interface PropItem {
  name: string
  values: string[]
  defaultValue?: string
  description?: string
}

export interface PropsType {
  props?: PropItem[]
  link?: {
    href: string
    name: string
  }
}

export const Prop: FC<PropItem> = ({
  name,
  values,
  description,
  defaultValue,
}) => {
  return (
    <Stack>
      <Stack>
        <Cluster gap="xs" alignItems="center">
          <Text weight="bold">{name}:</Text>
          <Cluster>
            {values.map((v) => (
              <Text size="sm" key={v}>
                {v}
              </Text>
            ))}
          </Cluster>
        </Cluster>
        {defaultValue && (
          <Cluster gap="xs">
            <Text weight="bold">default:</Text>
            <Text size="sm">{defaultValue}</Text>
          </Cluster>
        )}
        {description && <Text size="sm">{description}</Text>}
      </Stack>
      <hr />
    </Stack>
  )
}
