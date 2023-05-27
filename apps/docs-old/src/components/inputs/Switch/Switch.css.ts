import { vars } from '@kodiui/ui'
import { style } from '@vanilla-extract/css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

export const switchRoot = style({
  all: 'unset',
  cursor: 'pointer',
  width: '42px',
  height: '25px',
  backgroundColor: vars.colors.blackA9,
  borderRadius: '9999px',
  position: 'relative',
  boxShadow: `0 2px 10px ${vars.colors.blackA7}`,
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  ':focus': {
    boxShadow: `0 0 0 1px ${vars.colors.blackA12}`,
  },
  selectors: {
    '&[data-state="checked"]': {
      backgroundColor: `${vars.colors.blackA12}`,
    },
  },
})

export const switchThumb = style({
  display: 'block',
  width: '21px',
  height: '21px',
  backgroundColor: vars.colors.white,
  borderRadius: '9999px',
  boxShadow: `0 2px 2px ${vars.colors.blackA7}`,
  transition: 'transform 200ms ease-in',
  transform: 'translateX(2px)',
  willChange: 'transform',
  selectors: {
    '&[data-state="checked"]': {
      transform: 'translateX(19px)',
    },
  },
})

export const rootRecipe = recipe({
  base: switchRoot,
  variants: {
    tone: {
      brand: {
        backgroundColor: vars.colors.blackA9,
        boxShadow: `0 2px 10px ${vars.colors.blackA7}`,
        ':focus': {
          boxShadow: `0 0 0 1px ${vars.colors.brand}`,
        },
        selectors: {
          '&[data-state="checked"]': {
            backgroundColor: `${vars.colors.brandActive}`,
          },
        },
      },
      brandAccent: {
        backgroundColor: vars.colors.blackA9,
        boxShadow: `0 2px 10px ${vars.colors.blackA7}`,
        ':focus': {
          boxShadow: `0 0 0 1px ${vars.colors.brandAccent}`,
        },
        selectors: {
          '&[data-state="checked"]': {
            backgroundColor: `${vars.colors.brandAccentActive}`,
          },
        },
      },
      success: {
        backgroundColor: vars.colors.blackA9,
        boxShadow: `0 2px 10px ${vars.colors.blackA7}`,
        ':focus': {
          boxShadow: `0 0 0 1px ${vars.colors.green7}`,
        },
        selectors: {
          '&[data-state="checked"]': {
            backgroundColor: `${vars.colors.green9}`,
          },
        },
      },
      info: {
        backgroundColor: vars.colors.blackA9,
        boxShadow: `0 2px 10px ${vars.colors.blackA7}`,
        ':focus': {
          boxShadow: `0 0 0 1px ${vars.colors.yellow7}`,
        },
        selectors: {
          '&[data-state="checked"]': {
            backgroundColor: `${vars.colors.yellow9}`,
          },
        },
      },
      critical: {
        backgroundColor: vars.colors.blackA9,
        boxShadow: `0 2px 10px ${vars.colors.blackA7}`,
        ':focus': {
          boxShadow: `0 0 0 1px ${vars.colors.red7}`,
        },
        selectors: {
          '&[data-state="checked"]': {
            backgroundColor: `${vars.colors.red9}`,
          },
        },
      },
    },
  },
})

export type SwitchVariants = RecipeVariants<typeof rootRecipe>
