import { vars } from '@kodiui/ui'
import { keyframes, style } from '@vanilla-extract/css'

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-2px)',
  },
  to: {
    opacity: 1,
    transform: ' translateX(0)',
  },
})

const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-2px)',
  },
  to: {
    opacity: 1,
    transform: ' translateY(0)',
  },
})

const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(2px)',
  },
  to: {
    opacity: 1,
    transform: ' translateX(0)',
  },
})

export const tooltipStyle = style({
  position: 'relative',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic- bezier(0.16, 1, 0.3, 1)',
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.borderRadius.sm,
  fontSize: vars.fontSize.sm,
  lineHeight: 1,
  backgroundColor: vars.colors.white,
  boxShadow: vars.boxShadow['shadow-2'],
  userSelect: 'none',
  willChange: 'tranform, opactiy',
  selectors: {
    '&[data-side=top]': {
      animationName: slideDownAndFade,
    },
    '&[data-side=left]': {
      animationName: slideRightAndFade,
    },
    '&[data-side=right]': {
      animationName: slideLeftAndFade,
    },
    '&[data-side=bottom]': {
      animationName: slideUpAndFade,
    },
  },
})
