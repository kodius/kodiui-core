import { Box, BoxProps } from '@kodiui/ui'
import React, { FC, PropsWithChildren } from 'react'
import { badgeRecipe, BadgeVariants } from './badge.css'

export const Badge: FC<PropsWithChildren & BoxProps & BadgeVariants> = (props) => {
  return (
    <Box className={badgeRecipe({ tone: props.tone, weight: props.weight })} {...props}>
      {props.children}
    </Box>
  )
}
