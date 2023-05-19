import { vars } from '@kodiui/ui'
import { keyframes, style } from '@vanilla-extract/css'

const overlayShow = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
})

const contentShow = keyframes({
  from: {
    opacity: 0,
    transform: 'translate(-50%, -48%) scale(0.96)',
  },
  to: {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
  },
})

export const dialogOverlay = style({
  backgroundColor: vars.colors.blackA9,
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

export const dialogContent = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.borderRadius.sm,
  boxShadow: vars.boxShadow['shadow-2'],
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: vars.space.lg,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  selectors: {
    '&:focus': {
      outline: 'none',
    },
  },
})

export const dialogClose = style({
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: '25px',
  width: '25px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.colors.black,
  position: 'absolute',
  top: '10px',
  right: '10px',
  selectors: {
    '&:hover': {
      backgroundColor: vars.colors.brandSoftHover,
    },
    '&:focus': {
      boxShadow: `0 0 0 2px ${vars.colors.brandSoftActive}`,
    },
  },
})
