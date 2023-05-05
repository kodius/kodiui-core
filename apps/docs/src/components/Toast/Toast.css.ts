import { vars } from '@kodiui/ui'
import { createVar, style, keyframes } from '@vanilla-extract/css'

export const paddingVar = createVar()

const hide = keyframes({
  vars: {
    [paddingVar]: '25px',
  },
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

const slideIn = keyframes({
  vars: {
    [paddingVar]: '25px',
  },
  from: {
    transform: `translateX(calc(100% + ${paddingVar}))`,
  },
  to: {
    transform: 'translateX(0)',
  },
})

const swipeOut = keyframes({
  vars: {
    [paddingVar]: '25px',
  },
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: `translateX(calc(100% + ${paddingVar}))`,
  },
})

export const toastViewport = style({
  vars: {
    [paddingVar]: '25px',
  },
  position: 'fixed',
  bottom: '0',
  right: '0',
  display: 'flex',
  flexDirection: 'column',
  padding: paddingVar,
  gap: '10px',
  width: '390px',
  maxWidth: '100vw',
  margin: '0',
  listStyle: 'none',
  zIndex: '7897648948',
  outline: 'none',
})

export const toastRoot = style({
  vars: {
    [paddingVar]: '25px',
  },
  backgroundColor: 'white',
  borderRadius: '6px',
  boxShadow: vars.boxShadow['shadow-3'],
  padding: '1rem',
  display: 'grid',
  gridTemplateAreas: `'title action' 'description action'`,
  gridTemplateColumns: 'auto max-content',
  alignItems: 'center',
  selectors: {
    '&[data-state=open]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state=closed]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe=move]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe=cancel]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe=end]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },
})

export const toastTitle = style({
  gridArea: 'title',
  marginBottom: '5px',
  fontWeight: '500',
  color: vars.colors.slate12,
  fontSize: '15px',
})

export const toastDescription = style({
  gridArea: 'description',
  margin: '0',
  color: vars.colors.slate11,
  fontSize: '13px',
  lineHeight: '1.3',
})

export const icon = style({
  width: '20px',
  height: '20px',
})
