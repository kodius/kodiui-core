import { vars } from "@kodiui/ui";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const dividerRecipe = recipe({
  variants: {
    weight: {
      regular: {
        borderWidth: "1px",
      },
      md: {
        borderWidth: "2px",
      },
      lg: {
        borderWidth: "3px",
      },
    },
    tone: {
      light: {
        borderColor: vars.colors.blackA4,
      },
      neutral: {
        borderColor: vars.colors.blackA8,
      },
      dark: {
        borderColor: vars.colors.blackA11,
      },
    },
  },
  defaultVariants: {
    weight: "regular",
    tone: "light",
  },
});

export type DividerVariants = RecipeVariants<typeof dividerRecipe>;
