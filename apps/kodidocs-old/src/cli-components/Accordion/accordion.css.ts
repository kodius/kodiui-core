import { vars } from '@kodiui/ui'
import { globalStyle, keyframes, style } from '@vanilla-extract/css'

const slideDown = keyframes({
  from: {
    height: 0,
  },
  to: {
    height: 'var(--radix-collapsible-content-height)',
  },
})

const slideUp = keyframes({
  from: {
    height: 'var(--radix-collapsible-content-height)',
  },
  to: {
    height: 0,
  },
})

export const accordionContentStyle = style({
  overflow: 'hidden',
  fontSize: vars.fontSize.sm,
  backgroundColor: vars.colors.sky2,
  color: vars.colors.gray11,
  selectors: {
    '&[data-state=open]': {
      animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
    },
    '&[data-state=closed]': {
      animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
    },
  },
})

export const accordionItemStyle = style({
  overflow: 'hidden',
  outline: 'none',
  ':focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: `0 0 0 1px ${vars.colors.gray7}`,
  },
})

export const accordionContentText = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
})

export const accordionTriggerStyle = style({
  cursor: 'pointer',
  outline: 'none',
  border: 'none',
  fontFamily: 'inherit',
  padding: `0 ${vars.space.md}`,
  height: '45px',
  flex: 1,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: vars.fontSize.sm,
  fontWeight: 'lighter',
  lineHeight: 1,
  color: vars.colors.gray11,
  boxShadow: vars.boxShadow['shadow-5'],
  backgroundColor: vars.colors.sky3,
  ':hover': {
    backgroundColor: vars.colors.sky2,
  },
  selectors: {
    '&[data-state=open]': {
      color: vars.colors.sky9,
      fontWeight: 'bold',
    },
  },
})

globalStyle(`${accordionTriggerStyle} svg`, {
  width: 20,
  height: 20,
  transition: '200ms ease transform',
})

globalStyle(`${accordionTriggerStyle}[data-state=open] > svg`, {
  transform: 'rotate(180deg)',
})
