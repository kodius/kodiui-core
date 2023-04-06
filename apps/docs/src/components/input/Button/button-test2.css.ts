import { vars } from "@kodiui/ui";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

function setHslColorLightness(hslColor: string): string {
  const [h, s, l] = hslColor.match(/\d+(\.\d+)?/g)!.map(parseFloat);
  console.log(h, s, l);

  const newL = l;

  return `hsl(${h}, ${s}%, ${newL}%)`;
}

export const buttonRecipe4 = recipe({
  base: {
    borderRadius: vars.borderRadius.sm,
    borderWidth: vars.borderWidth.md,
    borderStyle: "solid",
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
        background: vars.colors.brand,
        color: vars.colors.brand,
        borderColor: vars.colors.brand,
      },
      brandAccent: {
        background: vars.colors.brandAccent,
        borderColor: vars.colors.brandAccent,
        color: vars.colors.brandAccent,
      },
    },
    variant: {
      solid: {
        color: vars.colors.white,
        ":hover": {
          background: setHslColorLightness(vars.colors.brand),
        },
      },
      ghost: {
        background: vars.colors.white,
        // color: vars.colors.indigo9,
        // filter: "brightness(100%)",
      },
      soft: {
        borderColor: "transparent",
        // background: makeTransparent(vars.colors.brand)
        // background: vars.colors.indigo3,
        // color: vars.colors.indigo9,
      },
      transparent: {
        background: "transparent",
        borderColor: "transparent",
        // color: vars.colors.indigo9,
      },
    },
    size: {
      small: { padding: `${vars.space.xxs} ${vars.space.xs}` },
      standard: { padding: `${vars.space.xs} ${vars.space.sm}` },
      test: { padding: 0 },
    },
  },
  compoundVariants: [
    // {
    //   variants: {
    //     variant: "solid",
    //     tone: "brand",
    //   },
    //   style: {
    //     ":hover": {
    //     },
    //   },
    // },
    // {
    //   variants: {
    //     variant: "solid",
    //     tone: "brandAccent",
    //   },
    //   style: {
    //     background: vars.colors.crimson9,
    //     borderColor: vars.colors.crimson9,
    //     ":hover": {
    //       background: vars.colors.crimson10,
    //       borderColor: vars.colors.crimson10,
    //     },
    //   },
    // },
    // {
    //   variants: {
    //     variant: "ghost",
    //     tone: "brandAccent",
    //   },
    //   style: {
    //     color: vars.colors.crimson10,
    //     borderColor: vars.colors.crimson10,
    //     ":hover": {
    //       background: vars.colors.crimson3,
    //     },
    //   },
    // },
    // {
    //   variants: {
    //     variant: "soft",
    //     tone: "brandAccent",
    //   },
    //   style: {
    //     color: vars.colors.crimson10,
    //     background: vars.colors.crimson3,
    //     ":hover": {
    //       background: vars.colors.crimson4,
    //     },
    //   },
    // },
    // {
    //   variants: {
    //     variant: "transparent",
    //     tone: "brandAccent",
    //   },
    //   style: {
    //     color: vars.colors.crimson10,
    //     ":hover": {
    //       background: vars.colors.crimson3,
    //     },
    //   },
    // },
  ],

  defaultVariants: {
    variant: "solid",
    size: "standard",
    tone: "brand",
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonRecipe4>;
