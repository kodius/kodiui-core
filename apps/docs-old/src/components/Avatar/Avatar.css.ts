import { vars } from '@kodiui/ui'
import { style } from '@vanilla-extract/css'

export const avatarRoot = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: '45px',
  height: '45px',
  borderRadius: '100%',
  backgroundColor: vars.colors.blackA3,
})

export const avatarImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const avatarFallback = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: vars.colors.brandSoftHover,
  color: vars.colors.brand,
  fontSize: '15px',
  lineHeight: 1,
  fontWeight: 500,
})
