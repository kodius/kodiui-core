import { vars } from "@kodiui/ui";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const text = recipe({
  variants: {
    tone: {
      brand: {
        color: vars.colors.brand,
      },
    },
  },
});

export type TextVariants = RecipeVariants<typeof text>;
