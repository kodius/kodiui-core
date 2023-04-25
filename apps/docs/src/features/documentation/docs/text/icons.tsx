import { ReactIcon } from '@/assets'
import { Text } from '@/components'
import { Stack } from '@kodiui/ui'
import React from 'react'

export const Icons = () => {
  return (
    <Stack>
      <Text icon={<ReactIcon />}>Neutral</Text>
      <Text icon={<ReactIcon />} tone="brand">
        Brand
      </Text>
      <Text icon={<ReactIcon />} tone="brandAccent">
        Brand accent
      </Text>
      <Text icon={<ReactIcon />} tone="info">
        Info
      </Text>
      <Text icon={<ReactIcon />} tone="success">
        Success
      </Text>
      <Text icon={<ReactIcon />} tone="critical">
        Critical
      </Text>
      <Text icon={<ReactIcon />} color="orange10">
        Custom color
      </Text>
    </Stack>
  )
}
