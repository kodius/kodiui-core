import { createThemeContract } from "@vanilla-extract/css";
import { defColors } from "./default/defaults.css";

export const kodiContract = createThemeContract({
  colors: {
    ...defColors
  },
  space: {
    xs: ``,
    sm: ``,
    md: ``,
    lg: ``,
    xl: ``,
  },
  breakpoints: {
    sm: ``,
    md: ``,
    lg: ``,
    xl: ``,
  },
  font: {
    body: ``,
  },
  fontSize: {
    xs: ``,
    sm: ``,
    md: ``,
    lg: ``,
    xl: ``,
  },
  boxShadow: {
    sm: ``,
    md: ``,
    lg: ``,
  },
  radii: {
    sm: ``,
    md: ``,
    full: ``,
  },
});
