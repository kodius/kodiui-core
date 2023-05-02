import { vars } from '@kodiui/ui'
import { style } from '@vanilla-extract/css'

export const checkboxRoot = style({
  all: 'unset',
  cursor: 'pointer',
  width: '25px',
  height: '25px',
  borderRadius: vars.borderRadius.sm,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 2px 10px ${vars.colors.blackA7}`,
  ':hover': {
    backgroundColor: vars.colors.red3,
  },
  ':focus': {
    boxShadow: '0 0 0 1px black',
  },
})

export const checkboxIndicator = style({
  color: vars.colors.red11,
})
