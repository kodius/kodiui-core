import { vars } from "@kodiui/ui";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const buttonRecipe = recipe({
  base: {
    borderRadius: vars.borderRadius.sm,
    border: `${vars.borderWidth.md} solid ${vars.colors.indigo9}`,
    transition: `all 0.2s ease`,
    cursor: "pointer",
    fill: vars.colors.indigo3,
    ":active": {
      transform: "scale(0.95)",
    },
  },

  variants: {
    tone: {
      brandAccent: {
        background: vars.colors.purple8,
      },
    },
    variant: {
      solid: {
        background: vars.colors.indigo9,
        color: vars.colors.white,
        ":hover": {
          background: vars.colors.indigo10,
          borderColor: vars.colors.indigo10,
        },
      },
      ghost: {
        background: vars.colors.white,
        color: vars.colors.indigo9,
        ":hover": {
          background: vars.colors.indigo3,
        },
      },
      soft: {
        background: vars.colors.indigo3,
        borderColor: "transparent",
        color: vars.colors.indigo9,
        ":hover": {
          background: vars.colors.indigo4,
        },
      },
      transparent: {
        color: vars.colors.indigo9,
        background: "transparent",
        borderColor: "transparent",
        ":hover": {
          background: vars.colors.indigo3,
        },
      },
    },
    size: {
      small: { padding: `${vars.space.xxs} ${vars.space.xs}` },
      standard: { padding: `${vars.space.xs} ${vars.space.sm}` },
      test: { padding: 0 },
    },
  },

  compoundVariants: [
    {
      variants: {
        variant: "solid",
        tone: "brandAccent",
      },
      style: {
        background: vars.colors.crimson9,
        borderColor: vars.colors.crimson9,
        ":hover": {
          background: vars.colors.crimson10,
          borderColor: vars.colors.crimson10,
        },
      },
    },
    {
      variants: {
        variant: "ghost",
        tone: "brandAccent",
      },
      style: {
        color: vars.colors.crimson10,
        borderColor: vars.colors.crimson10,
        ":hover": {
          background: vars.colors.crimson3,
        },
      },
    },
    {
      variants: {
        variant: "soft",
        tone: "brandAccent",
      },
      style: {
        color: vars.colors.crimson10,
        background: vars.colors.crimson3,
        ":hover": {
          background: vars.colors.crimson4,
        },
      },
    },
    {
      variants: {
        variant: "transparent",
        tone: "brandAccent",
      },
      style: {
        color: vars.colors.crimson10,
        ":hover": {
          background: vars.colors.crimson3,
        },
      },
    },
  ],

  defaultVariants: {
    variant: "solid",
    size: "standard",
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;
