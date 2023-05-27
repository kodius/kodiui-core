import { vars } from '@kodiui/ui'
import { globalStyle, keyframes, style } from '@vanilla-extract/css'
import { global } from 'styled-jsx/css'

const translateAmount = 10

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: `translateY(${translateAmount}px)`,
  },
  to: {
    opacity: 1,
    transform: 'translateY(0);',
  },
})

const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: `translateX(-${translateAmount}px)`,
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: `translateY(-${translateAmount}px)`,
  },
  to: {
    opacity: 1,
    transform: 'translateY(0);',
  },
})

const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: `translateX(-${translateAmount}px)`,
  },
  to: {
    opacity: 1,
    transform: 'translateX(0);',
  },
})

export const dropdownMenuSubTriggerStyle = style({
  selectors: {
    '&[data-state=open]': {
      backgroundColor: vars.colors.brandSoftHover,
      color: vars.colors.brand,
    },
  },
})

export const dropdownMenuSubTriggerIconStyle = style({
  marginLeft: 'auto',
})

export const dropdownMenuSubContentStyle = style({})
export const dropdownMenuContentStyle = style({})
export const dropdownMenuItemStyle = style({})
export const dropdownMenuRadioItemStyle = style({})
export const dropdownMenuCheckboxItemStyle = style({})
export const dropdownMenuLabelStyle = style({
  fontSize: 'small',
  padding: vars.space.xxs,
  paddingLeft: vars.space.xs,
  color: vars.colors.gray10,
})

export const dropdownMenuSeparatorStyle = style({
  backgroundColor: vars.colors.brandSoftActive,
  height: '1px',
  margin: '5px',
  marginRight: vars.space['--xxs'],
  marginLeft: vars.space['--xxs'],
})

export const dropdownMenuShortcutStyle = style({
  marginLeft: 'auto',
  paddingLeft: '20px',
  color: vars.colors.gray10,
})

export const dropdownMenuItemIndicatorStyle = style({
  position: 'absolute',
  left: 0,
  width: '25px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
})

globalStyle(`${dropdownMenuContentStyle}, ${dropdownMenuSubContentStyle}`, {
  minWidth: '220px',
  backgroundColor: vars.colors.white,
  borderRadius: vars.borderRadius.sm,
  padding: vars.space.xs,
  boxShadow: vars.boxShadow['shadow-2'],
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
})

globalStyle(
  `${dropdownMenuContentStyle}[data-side=top], ${dropdownMenuSubContentStyle}[data-side=top]`,
  {
    animationName: slideDownAndFade,
  }
)

globalStyle(
  `${dropdownMenuContentStyle}[data-side=right], ${dropdownMenuSubContentStyle}[data-side=right]`,
  {
    animationName: slideLeftAndFade,
  }
)

globalStyle(
  `${dropdownMenuContentStyle}[data-side=bottom], ${dropdownMenuSubContentStyle}[data-side=bottom]`,
  {
    animationName: slideUpAndFade,
  }
)

globalStyle(
  `${dropdownMenuContentStyle}[data-side=left], ${dropdownMenuSubContentStyle}[data-side=left]`,
  {
    animationName: slideRightAndFade,
  }
)

// -------------------------------------------------------------

globalStyle(
  `${dropdownMenuItemStyle}, ${dropdownMenuCheckboxItemStyle}, ${dropdownMenuRadioItemStyle}, ${dropdownMenuSubTriggerStyle}`,
  {
    fontSize: '13px',
    lineHeight: 1,
    color: vars.colors.brand,
    borderRadius: vars.borderRadius.sm,
    display: 'flex',
    alignItems: 'center',
    height: '25px',
    gap: vars.space.xxs,
    padding: vars.space.xs,
    position: 'relative',
    userSelect: 'none',
    outline: 'none',
  }
)

// -------------------------------------------------------------
globalStyle(
  `${dropdownMenuItemStyle}[data-disabled], ${dropdownMenuCheckboxItemStyle}[data-disabled], ${dropdownMenuRadioItemStyle}[data-disabled], ${dropdownMenuSubTriggerStyle}[data-disabled]`,
  {
    color: vars.colors.gray9,
    pointerEvents: 'none',
  }
)
// -------------------------------------------------------------
globalStyle(
  `${dropdownMenuItemStyle}[data-highlighted], ${dropdownMenuCheckboxItemStyle}[data-highlighted], ${dropdownMenuRadioItemStyle}[data-highlighted], ${dropdownMenuSubTriggerStyle}[data-highlighted]`,
  {
    backgroundColor: vars.colors.brand,
    color: vars.colors.white,
  }
)
// tell shourtcut to inherit the orginal color
globalStyle(`${dropdownMenuItemStyle}[data-highlighted] ${dropdownMenuShortcutStyle}`, {
  color: 'inherit',
})

export const itemInsetStyle = style({
  paddingLeft: vars.space.md,
})
