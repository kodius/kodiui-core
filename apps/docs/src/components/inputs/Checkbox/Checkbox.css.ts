import { vars } from '@kodiui/ui'
import { style } from '@vanilla-extract/css'

export const checkboxRoot = style({
  all: 'unset',
  cursor: 'pointer',
  width: '25px',
  height: '25px',
  borderColor: vars.colors.blackA12,
  borderRadius: vars.borderRadius.sm,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 2px 10px ${vars.colors.blackA7}`,
  ':hover': {
    // TODO: change indigo6 to some brand color
    backgroundColor: vars.colors.indigo6,
  },
  ':focus': {
    boxShadow: `0 0 0 1px ${vars.colors.blackA12}`,
  },
  ':disabled': {
    backgroundColor: vars.colors.gray2,
  },
})

export const checkboxIndicator = style({
  color: vars.colors.blackA12,
})
