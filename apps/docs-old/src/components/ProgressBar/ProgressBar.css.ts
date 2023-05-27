import { vars } from '@kodiui/ui'
import { style } from '@vanilla-extract/css'

export const barRoot = style({
  position: 'relative',
  overflow: 'hidden',
  background: vars.colors.black,
  width: '300px',
  height: '20px',
  borderRadius: '99999px',
  transform: 'translateZ(0)',
})

export const barIndicator = style({
  backgroundColor: vars.colors.brandHover,
  width: '100%',
  height: '100%',
  transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
})
