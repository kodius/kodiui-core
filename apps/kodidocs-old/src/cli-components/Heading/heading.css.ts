import { vars } from '@kodiui/ui'
import { globalStyle, style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

export const headingRecipe = recipe({
  base: {
    color: vars.colors.black,
    lineHeight: '100%',
  },
  variants: {
    weight: {
      weak: {
        fontWeight: 'normal',
      },
      regular: {
        fontWeight: 'bolde',
      },
    },
  },
  defaultVariants: {
    weight: 'regular',
  },
})

export const headingStyle = style({})

globalStyle(`${headingStyle} svg`, {
  width: '1.6em',
  height: '1.6em',
})

export type HeadingVariants = RecipeVariants<typeof headingRecipe>
