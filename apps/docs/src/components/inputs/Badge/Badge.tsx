import { Box, BoxProps } from '@kodiui/ui'
import React, { PropsWithChildren } from 'react'
import { badgeRecipe, BadgeVariants } from './badge.css'

type Props = PropsWithChildren & BoxProps & BadgeVariants

export const Badge = React.forwardRef<HTMLElement, Props>((props, forwardRef) => {
  return (
    <Box
      ref={forwardRef}
      className={badgeRecipe({ tone: props.tone, weight: props.weight })}
      {...props}
    >
      {props.children}
    </Box>
  )
})

Badge.displayName = 'Badge'
