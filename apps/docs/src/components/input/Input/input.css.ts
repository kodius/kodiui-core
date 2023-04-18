import { vars } from "@kodiui/ui";
import { style, styleVariants } from "@vanilla-extract/css";

export const inputStyle = style({
  padding: vars.space.xs,
});

export const inputStyleVariants = styleVariants({
  error: [
    inputStyle,
    {
      border: `${vars.borderWidth.sm} solid ${vars.colors.critical}`,
    },
  ],
  none: {},
});
