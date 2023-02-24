import { createThemeContract, createGlobalTheme } from "@vanilla-extract/css";
import { colors } from "./colors";

export const vars = createThemeContract({
  colors,
  // space
  // borders,
  // breakpoints,
  // backgrounds,
  // indices,
  // shadows,
  // spacing,
  // sizes,
  // font,
});

createGlobalTheme(":root", vars, {
  colors,
  // borders,
  // breakpoints,
  // backgrounds,
  // indices,
  // shadows,
  // spacing,
  // sizes,
  // font,
});
