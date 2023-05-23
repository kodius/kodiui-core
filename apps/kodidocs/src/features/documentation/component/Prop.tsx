import { Divider } from '@cli-components/Divider'
import { Text } from '@cli-components/Text'
import { Cluster, Stack } from '@kodiui/ui'
import React, { FC } from 'react'

interface PropItem {
  name: string
  values: string[]
  defaultValue: string
  description?: string
}

export interface PropsType {
  props?: PropItem[]
  link?: {
    href: string
    name: string
  }
}

export const Prop: FC<PropItem> = ({ name, values, description, defaultValue }) => {
  return (
    <Stack>
      <Stack>
        <Cluster gap="xs">
          <Text tone="brandAccent" weight="strong">
            {name}:
          </Text>
          <Cluster>
            {values.map((v) => (
              <Text size="small" key={v}>
                {v}
              </Text>
            ))}
          </Cluster>
        </Cluster>
        <Cluster gap="xs">
          <Text tone="brandAccent" weight="strong">
            default:
          </Text>
          <Text size="small">{defaultValue}</Text>
        </Cluster>
        <Text size="small">{description}</Text>
      </Stack>
      <Divider />
    </Stack>
  )
}
