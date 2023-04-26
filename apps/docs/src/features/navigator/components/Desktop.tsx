import { Box, Stack } from '@kodiui/ui'
import React, { FC, PropsWithChildren } from 'react'
import { Logo } from './Logo'

export const Desktop: FC<PropsWithChildren> = (props) => {
  return (
    <Box
      position={{
        mobileSmall: 'fixed',
        tablet: 'static',
      }}
      overflow="auto"
      height="screen"
      width={{ mobile: 'screen', tablet: '60' }}
      display={{
        mobileExtraSmall: 'none',
        mobileSmall: 'none',
        tablet: 'block',
      }}
    >
      <Stack>
        <Logo />
        {props.children}
      </Stack>
    </Box>
  )
}
