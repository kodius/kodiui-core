import { vars } from '@kodiui/ui'
import { style } from '@vanilla-extract/css'

export const sliderRoot = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
  width: '200px',
  height: '20px',
  selectors: {
    '&[aria-disabled="true"]': {
      opacity: '0.3',
    },
  },
})

export const sliderTrack = style({
  backgroundColor: vars.colors.blackA10,
  position: 'relative',
  flexGrow: '1',
  borderRadius: '9999px',
  height: '3px',
})

export const sliderRange = style({
  position: 'absolute',
  backgroundColor: vars.colors.black,
  borderRadius: '9999px',
  height: '100%',
})

export const sliderThumb = style({
  display: 'block',
  width: '20px',
  height: '20px',
  backgroundColor: vars.colors.black,
  boxShadow: `0 2px 10px ${vars.colors.blackA7}`,
  borderRadius: '10px',
  ':hover': {
    backgroundColor: vars.colors.black,
  },
  ':focus': {
    outline: 'none',
    boxShadow: `0 0 0 3px ${vars.colors.blackA8}`,
  },
})
