import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

export const headingRecipe = recipe({
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

export type HeadingVariants = RecipeVariants<typeof headingRecipe>
