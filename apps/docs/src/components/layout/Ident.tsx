import { Box, SpaceTypes } from '@kodiui/ui'
import React, { FC, PropsWithChildren } from 'react'

interface IdentProps {
  space?: SpaceTypes
}

export const Ident: FC<PropsWithChildren & IdentProps> = (props) => {
  return <Box paddingLeft={props.space || 'sm'}>{props.children}</Box>
}
