import { vars } from '@kodiui/ui'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

export const badgeRecipe = recipe({
  base: {
    padding: vars.space.xxs,
    fontSize: vars.fontSize.xs,
    borderRadius: vars.borderRadius.sm,
    width: 'fit-content',
  },
  variants: {
    tone: {
      neutral: {
        background: vars.colors.neutralSoft,
        color: vars.colors.neutral,
      },
      brand: {
        background: vars.colors.brandSoft,
        color: vars.colors.brand,
      },
      brandAccent: {
        background: vars.colors.brandAccentSoft,
        color: vars.colors.brandAccent,
      },
      critical: {
        background: vars.colors.criticalSoft,
        color: vars.colors.critical,
      },
      info: {
        background: vars.colors.infoSoft,
        color: vars.colors.infoActive,
      },
      success: {
        background: vars.colors.successSoft,
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
    tone: 'brand',
    weight: 'regular',
  },
})

export type BadgeVariants = RecipeVariants<typeof badgeRecipe>
