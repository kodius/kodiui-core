import { Heading } from '@/components'
import { Box, Stack } from '@kodiui/ui'
import React, { FC } from 'react'
import { BuillderProps } from '../types'
import { Builder } from './Builder/Builder'

export const DocBuilder: FC<BuillderProps> = (props) => {
  const builder = props.build().map((builder) => <Builder {...builder} key={builder.label} />)

  return (
    <Box p={{ mobileExtraSmall: 'sm', tablet: '3xl' }}>
      <Box paddingTop={{ mobileExtraSmall: '0', tablet: '3xl' }} />
      <Stack gap="lg">
        <Heading level="1">{props.title}</Heading>
        {builder}
      </Stack>
    </Box>
  )
}
