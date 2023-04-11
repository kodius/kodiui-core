import { vars } from "@kodiui/ui";
import { globalStyle, style } from "@vanilla-extract/css";
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

export const textStyle = style({});

globalStyle(`${textStyle} svg`, {
  stroke: "currentcolor",
  fill: "currentcolor",
  width: "1.2em",
  height: "1.2em",
});

export type TextVariants = RecipeVariants<typeof text>;
