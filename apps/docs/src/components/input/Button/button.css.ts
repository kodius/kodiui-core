import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const buttonStyle = recipe({
  base: {
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  },

  variants: {
    color: {
      neutral: { background: "whitesmoke" },
      brand: { background: "blueviolet" },
      accent: { background: "slateblue" },
    },
    size: {
      xs: { padding: 0 },
      small: { padding: 8 },
      medium: { padding: 10 },
      large: { padding: 24 },
    },
    type: {
      ghost: {
        background: "none",
        width: "fit-content"
      },
    },
  },

  // compoundVariants: [
  //   {
  //     variants: {
  //       color: "neutral",
  //       size: "large",
  //     },
  //     style: {
  //       background: "ghostwhite",
  //     },
  //   },
  // ],

  defaultVariants: {
    color: "accent",
    size: "medium",
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonStyle>;
