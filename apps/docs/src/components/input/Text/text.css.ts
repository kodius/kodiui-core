import { vars } from '@kodiui/ui'
import { globalStyle, style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

export const textRecipe = recipe({
  variants: {
    size: {
      xsmall: {
        fontSize: vars.fontSize.xs,
      },
      small: {
        fontSize: vars.fontSize.sm,
      },
      standard: {
        fontSize: vars.fontSize.base,
      },
      large: {
        fontSize: vars.fontSize.xl,
      },
    },
    tone: {
      neutral: {
        color: 'inherite',
      },
      brand: {
        color: vars.colors.brand,
      },
      brandAccent: {
        color: vars.colors.brandAccent,
      },
      critical: {
        color: vars.colors.critical,
      },
      info: {
        color: vars.colors.info,
      },
      success: {
        color: vars.colors.success,
      },
    },
    weight: {
      regular: {
        fontWeight: 'normal',
      },
      medium: {
        fontWeight: 500,
      },
      strong: {
        fontWeight: 'bolder',
      },
    },
  },
  defaultVariants: {
    size: 'standard',
    tone: 'neutral',
    weight: 'regular',
  },
})

export const textStyle = style({})

globalStyle(`${textStyle} svg`, {
  stroke: 'currentcolor',
  fill: 'currentcolor',
  width: '1.2em',
  height: '1.2em',
})

export type TextVariants = RecipeVariants<typeof textRecipe>
