import { vars } from "@kodiui/ui";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const buttonRecipe = recipe({
  base: {
    borderRadius: vars.borderRadius.sm,
    color: vars.colors.indigo9,
    border: `${vars.borderWidth.md} solid ${vars.colors.indigo9}`,
  },

  variants: {
    variant: {
      solid: { background: vars.colors.indigo9, color: vars.colors.white },
      ghost: {
        background: vars.colors.white,
      },
      soft: { background: vars.colors.indigo3, borderColor: "transparent" },
      transparent: { background: "transparent", borderColor: "transparent" },
    },
    size: {
      small: { padding: `${vars.space.xxs} ${vars.space.xs}` },
      standard: { padding: `${vars.space.xs} ${vars.space.sm}` },
    },
  },

  defaultVariants: {
    variant: "solid",
    size: "standard",
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;
