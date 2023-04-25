import { vars } from '@kodiui/ui'
import { globalStyle, style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

export const textLinkStyle = style({})

globalStyle(`${textLinkStyle} svg`, {
  width: '1.2em',
  height: '1.2em',
})

export const textLinkRecipe = recipe({
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
    weight: 'regular',
  },
})

export const textStyle = style({})

export type TextLinkVariants = RecipeVariants<typeof textLinkRecipe>
