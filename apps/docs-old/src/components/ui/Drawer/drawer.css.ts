import { vars } from '@kodiui/ui'
import { keyframes, style } from '@vanilla-extract/css'

const TRANSLATE_AMOUT_IN = '30px'
const TRANSLATE_AMOUT_OUT = '5px'
const ANIMATION_SPEED = '0.15s'
const ANIMATION_TIMING = vars.animationTimingFunction['ease-out-1']

const openDrawerAnimationRight = keyframes({
  '0%': {
    opacity: 0,
    transform: `translateX(${TRANSLATE_AMOUT_IN})`,
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0px)',
  },
})

const closeDrawerAnimationRight = keyframes({
  '0%': {
    opacity: 1,
    transform: 'translateX(0px)',
  },
  '100%': {
    opacity: 0,
    transform: `translateX(${TRANSLATE_AMOUT_OUT})`,
  },
})

const openDrawerAnimationLeft = keyframes({
  '0%': {
    opacity: 0,
    transform: `translateX(-${TRANSLATE_AMOUT_IN})`,
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0px)',
  },
})

const closeDrawerAnimationLeft = keyframes({
  '0%': {
    opacity: 1,
    transform: 'translateX(0px)',
  },
  '100%': {
    opacity: 0,
    transform: `translateX(-${TRANSLATE_AMOUT_OUT})`,
  },
})

const fadeInLayerAnimation = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
})

const fadeOutLayerAnimation = keyframes({
  '0%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
})

export const openDrawerLeft = style({
  animation: openDrawerAnimationLeft,
  animationFillMode: 'forwards',
  animationDuration: ANIMATION_SPEED,
  animationTimingFunction: ANIMATION_TIMING,
})

export const closeDrawerLeft = style({
  animation: closeDrawerAnimationLeft,
  animationFillMode: 'forwards',
  animationDuration: ANIMATION_SPEED,
  animationTimingFunction: ANIMATION_TIMING,
})

export const openDrawerRight = style({
  animation: openDrawerAnimationRight,
  animationFillMode: 'forwards',
  animationDuration: ANIMATION_SPEED,
  animationTimingFunction: ANIMATION_TIMING,
})

export const closeDrawerRight = style({
  animation: closeDrawerAnimationRight,
  animationFillMode: 'forwards',
  animationDuration: ANIMATION_SPEED,
  animationTimingFunction: ANIMATION_TIMING,
})

export const fadeInLayer = style({
  animation: fadeInLayerAnimation,
  animationFillMode: 'forwards',
  animationDuration: ANIMATION_SPEED,
  animationTimingFunction: ANIMATION_TIMING,
})

export const fadeOutLayer = style({
  animation: fadeOutLayerAnimation,
  animationFillMode: 'forwards',
  animationDuration: ANIMATION_SPEED,
  animationTimingFunction: ANIMATION_TIMING,
})
