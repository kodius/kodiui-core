import { vars } from "@kodiui/ui";
import { globalStyle, style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const buttonStyle = style({});

globalStyle(`${buttonStyle} svg`, {
  height: "1.2em",
  width: "1.2em",
});

export const buttonRecipe = recipe({
  base: {
    borderRadius: vars.borderRadius.sm,
    borderWidth: vars.borderWidth.sm,
    borderStyle: "solid",
    transition: `all 0.2s ease`,
    height: "fit-content",
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
      critical: {
        background: vars.colors.critical,
        borderColor: vars.colors.critical,
        color: vars.colors.critical,
        ":hover": {
          background: vars.colors.criticalHover,
          borderColor: vars.colors.criticalHover,
        },
        fill: vars.colors.criticalSoft,
      },
      info: {
        background: vars.colors.info,
        borderColor: vars.colors.info,
        color: vars.colors.info,
        ":hover": {
          background: vars.colors.infoHover,
          borderColor: vars.colors.infoHover,
        },
        fill: vars.colors.infoSoft,
      },
      success: {
        background: vars.colors.success,
        borderColor: vars.colors.success,
        color: vars.colors.success,
        ":hover": {
          background: vars.colors.success,
          borderColor: vars.colors.success,
        },
        fill: vars.colors.successSoft,
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
        background: "transparent",
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
    // Critical
    {
      variants: {
        variant: "transparent",
        tone: "critical",
      },
      style: {
        ":hover": {
          background: vars.colors.criticalSoftHover,
          borderColor: vars.colors.criticalSoftHover,
        },
      },
    },
    {
      variants: {
        variant: "soft",
        tone: "critical",
      },
      style: {
        background: vars.colors.criticalSoft,
        ":hover": {
          background: vars.colors.criticalSoftHover,
        },
      },
    },
    {
      variants: { variant: "ghost", tone: "critical" },
      style: {
        ":hover": {
          background: vars.colors.criticalSoftHover,
        },
      },
    },
    // Info
    {
      variants: {
        variant: "transparent",
        tone: "info",
      },
      style: {
        ":hover": {
          background: vars.colors.infoSoftHover,
          borderColor: vars.colors.infoSoftHover,
        },
      },
    },
    {
      variants: {
        variant: "soft",
        tone: "info",
      },
      style: {
        background: vars.colors.infoSoft,
        ":hover": {
          background: vars.colors.infoSoftActive,
        },
      },
    },
    {
      variants: { variant: "ghost", tone: "info" },
      style: {
        ":hover": {
          background: vars.colors.infoSoftHover,
        },
      },
    },
    // Success
    {
      variants: {
        variant: "transparent",
        tone: "success",
      },
      style: {
        ":hover": {
          background: vars.colors.successSoftHover,
          borderColor: vars.colors.successSoftHover,
        },
      },
    },
    {
      variants: {
        variant: "soft",
        tone: "success",
      },
      style: {
        background: vars.colors.successSoft,
        ":hover": {
          background: vars.colors.successSoftActive,
        },
      },
    },
    {
      variants: { variant: "ghost", tone: "success" },
      style: {
        ":hover": {
          background: vars.colors.successSoftHover,
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
