import { vars } from "@kodiui/ui";
import { style } from "@vanilla-extract/css";

export const switchRoot = style({
  all: "unset",
  width: "42px",
  height: "25px",
  backgroundColor: vars.colors.blackA9,
  borderRadius: "9999px",
  position: "relative",
  boxShadow: `0 2px 10px ${vars.colors.blackA7}`,
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  ":focus": {
    boxShadow: `0 0 0 1px ${vars.colors.blackA12}`,
  },
  selectors: {
    '&[data-state="checked"]': {
      backgroundColor: `${vars.colors.red9}`,
    },
  },
});

export const switchThumb = style({
  display: "block",
  width: "21px",
  height: "21px",
  backgroundColor: "white",
  borderRadius: "9999px",
  boxShadow: `0 2px 2px ${vars.colors.blackA7}`,
  transition: "transform 40ms",
  transform: "translateX(2px)",
  willChange: "transform",
  selectors: {
    '&[data-state="checked"]': {
      transform: "translateX(19px)",
    },
  },
});
