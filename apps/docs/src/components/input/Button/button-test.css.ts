import { vars } from "@kodiui/ui";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const buttonRecipe2 = recipe({
  base: {
    borderRadius: vars.borderRadius.sm,
    borderWidth: vars.borderWidth.md,
    borderStyle: "solid",
    // border: `${vars.borderWidth.md} solid ${vars.colors.indigo9}`,
    transition: `all 0.2s ease`,
    cursor: "pointer",
    // fill: vars.colors.indigo3,
    ":active": {
      transform: "scale(0.95)",
    },
  },

  variants: {
    tone: {
      brand: {
        backgroundColor: vars.colors.indigo9,
        color: vars.colors.indigo9,
        borderColor: vars.colors.indigo9,
        ":hover": {
          backgroundColor: "rgba(currentColor, 0.5)",
        },
        // ":hover": {
        // backgroundColor: vars.colors.whiteA1,
        // borderColor: vars.colors.indigo10,
        // },
      },
      brandAccent: {
        backgroundColor: vars.colors.crimson9,
        color: vars.colors.crimson9,
        borderColor: vars.colors.crimson9,
      },
    },
    variant: {
      solid: {
        color: vars.colors.white,
        // backgroundColor: vars.colors.indigo9,
        // ":hover": {
        //   backgroundColor: "rgba(currentColor, 0.5)",
        // },
      },
      ghost: {
        backgroundColor: vars.colors.white,
        // color: vars.colors.indigo9,
        // ":hover": {
        //   backgroundColor: vars.colors.indigo3,
        // },
      },
      soft: {
        // backgroundColor: "transparent"
        // backgroundColor: vars.colors.indigo3,
        borderColor: "transparent",
        // color: vars.colors.indigo9,
        // ":hover": {
        //   backgroundColor: vars.colors.indigo4,
        // },
      },
      transparent: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        // color: vars.colors.indigo9,
        // ":hover": {
        //   backgroundColor: vars.colors.indigo3,
        // },
      },
    },
    size: {
      small: { padding: `${vars.space.xxs} ${vars.space.xs}` },
      standard: { padding: `${vars.space.xs} ${vars.space.sm}` },
    },
  },

  defaultVariants: {
    tone: "brand",
    variant: "solid",
    size: "standard",
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonRecipe2>;
