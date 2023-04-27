import { vars } from '@kodiui/ui'
import { style } from '@vanilla-extract/css'

const lineColor = vars.colors.gray6

export const tabsRootStyle = style({})

export const tabsListStyle = style({
  gap: vars.space.md,
  display: 'flex',
  flexWrap: 'wrap',
  boxShadow: `inset 0 0 0 0 ${lineColor}, 0 1px 0 0 ${lineColor}`,
})

export const tabsTriggerStyle = style({
  all: 'unset',
  cursor: 'pointer',
  paddingLeft: vars.space.xs,
  paddingRight: vars.space.xs,
  paddingBottom: vars.space.xxs,
  selectors: {
    '&[data-state=active]': {
      fontWeight: 'bolder',
      color: vars.colors.brand,
      boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
    },
  },
})

export const tabsContentStyle = style({
  paddingTop: vars.space.md,
})
