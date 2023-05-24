import { Box, BoxProps, Center } from '@kodiui/ui'
import { HardStyles } from '@kodiui/ui/dist/styles/hardStyle'
import React from 'react'

export type DocPaneProps = Partial<HardStyles & BoxProps>

export const DocPane = ({ children, ...props }: DocPaneProps) => {
  return (
    <Box
      padding="sm"
      borderWidth="sm"
      color="brand"
      borderColor="brand"
      background="brandSoft"
      borderStyle="solid"
      fontSize="sm"
      style={{ fontFamily: 'monospace' }}
      {...props}
    >
      <Center direction="center">{children}</Center>
    </Box>
  )
}
