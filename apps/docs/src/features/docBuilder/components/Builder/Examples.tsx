import { Text } from '@/components'
import { Box, Stack } from '@kodiui/ui'
import React, { FC } from 'react'
import { BuildExemple } from '../../types'

const BoxProps = {
  borderRadius: 'sm',
  p: 'md',
} as const

export const Examples: FC<BuildExemple> = (props) => {
  const index = props.component.length
  const makeArray = Array(index).fill('')

  const ComponentWithLabel = makeArray.map((_, i) => (
    <Stack gap="xxs" key={i}>
      {props.label ? <Text color="black"> {props.label[i]} </Text> : null}
      {props.component[i]}
    </Stack>
  ))

  return (
    <Box background="gray2" {...BoxProps}>
      <Box background="white" {...BoxProps}>
        <Stack>{ComponentWithLabel}</Stack>
      </Box>
    </Box>
  )
}
