import { vars } from '@kodiui/ui'
import { style, styleVariants } from '@vanilla-extract/css'

const placeholder = {
  fontWeight: 400,
  fontSize: vars.fontSize.sm,
  lineHeight: '1 !important',
  color: '#6F6E77',
}

export const inputStyle = style({
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  padding: '0 10px',
  height: '35px',
  fontSize: vars.fontSize.sm,
  lineHeight: 1,
  color: vars.colors.black,
  backgroundColor: vars.colors.whiteA5,
  boxShadow: `0 0 0 1px ${vars.colors.blackA9}`,
  '::-webkit-input-placeholder': placeholder,
  ':-ms-input-placeholder': placeholder,
  '::placeholder': placeholder,
  ':focus': {
    boxShadow: `0 0 0 1px ${vars.colors.black}`,
  },
  ':hover': {
    boxShadow: `0 0 0 1px ${vars.colors.black}`,
  },
  ':disabled': {
    opacity: 0.4,
  },
  '::selection': {
    backgroundColor: vars.colors.blackA10,
    color: vars.colors.white,
  },
})

export const inputStyleVariants = styleVariants({
  error: [
    inputStyle,
    {
      border: `${vars.borderWidth.sm} solid ${vars.colors.critical}`,
    },
  ],
  none: {},
})
