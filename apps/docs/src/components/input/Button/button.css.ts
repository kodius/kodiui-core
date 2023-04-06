import { vars } from "@kodiui/ui";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const buttonRecipe = recipe({
  base: {
    borderRadius: vars.borderRadius.sm,
    borderWidth: vars.borderWidth.sm,
    borderStyle: "solid",
    transition: `all 0.2s ease`,
    cursor: "pointer",
    ":active": {
      transform: "scale(0.95)",
    },
  },

  variants: {
    tone: {
      brand: {
        background: vars.colors.brand,
        borderColor: vars.colors.brand,
        color: vars.colors.brand,
        ":hover": {
          background: vars.colors.brandHover,
          borderColor: vars.colors.brandHover,
        },
        fill: vars.colors.brandSoft,
      },
      brandAccent: {
        background: vars.colors.brandAccent,
        borderColor: vars.colors.brandAccent,
        color: vars.colors.brandAccent,
        ":hover": {
          background: vars.colors.brandAccentHover,
          borderColor: vars.colors.brandAccentHover,
        },
        fill: vars.colors.brandAccentSoft,
      },
      neutral: {
        background: vars.colors.neutral,
        borderColor: vars.colors.neutral,
        color: vars.colors.neutral,
        ":hover": {
          background: vars.colors.neutralHover,
          borderColor: vars.colors.neutralHover,
        },
        fill: vars.colors.neutralSoft,
      },
    },
    variant: {
      solid: {
        color: vars.colors.white,
      },
      ghost: {
        background: vars.colors.white,
      },
      soft: {
        borderColor: "transparent",
        ":hover": {
          borderColor: "transparent",
        },
      },
      transparent: {
        background: vars.colors.white,
        borderColor: "transparent",
      },
    },
    size: {
      sm: { padding: `${vars.space.xxs} ${vars.space.xs}` },
      standard: { padding: `${vars.space.xs} ${vars.space.sm}` },
    },
  },
  compoundVariants: [
    // Brand
    {
      variants: { variant: "ghost", tone: "brand" },
      style: {
        ":hover": {
          background: vars.colors.brandSoftHover,
        },
      },
    },
    {
      variants: {
        variant: "soft",
        tone: "brand",
      },
      style: {
        background: vars.colors.brandSoft,
        ":hover": {
          background: vars.colors.brandSoftHover,
        },
      },
    },
    {
      variants: {
        variant: "transparent",
        tone: "brand",
      },
      style: {
        ":hover": {
          background: vars.colors.brandSoftHover,
          borderColor: vars.colors.brandSoftHover,
        },
      },
    },
    // Brand Acent
    {
      variants: {
        variant: "transparent",
        tone: "brandAccent",
      },
      style: {
        ":hover": {
          background: vars.colors.brandAccentSoftHover,
          borderColor: vars.colors.brandAccentSoftHover,
        },
      },
    },
    {
      variants: {
        variant: "soft",
        tone: "brandAccent",
      },
      style: {
        background: vars.colors.brandAccentSoft,
        ":hover": {
          background: vars.colors.brandAccentSoftHover,
        },
      },
    },
    {
      variants: { variant: "ghost", tone: "brandAccent" },
      style: {
        ":hover": {
          background: vars.colors.brandAccentSoftHover,
        },
      },
    },
    // Neutral
    {
      variants: {
        variant: "transparent",
        tone: "neutral",
      },
      style: {
        ":hover": {
          background: vars.colors.neutralSoftHover,
          borderColor: vars.colors.neutralSoftHover,
        },
      },
    },
    {
      variants: {
        variant: "soft",
        tone: "neutral",
      },
      style: {
        background: vars.colors.neutralSoft,
        ":hover": {
          background: vars.colors.neutralSoftHover,
        },
      },
    },
    {
      variants: { variant: "ghost", tone: "neutral" },
      style: {
        ":hover": {
          background: vars.colors.neutralSoftHover,
        },
      },
    },
  ],

  defaultVariants: {
    tone: "brand",
    variant: "solid",
    size: "standard",
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;
