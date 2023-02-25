import { defContract, kodiContract } from "@kodiui/ui";
import { createTheme } from "@vanilla-extract/css";

export const theme = createTheme(kodiContract, {
  ...defContract,
});

// export const theme = createTheme(kodiContract, {
//   font: defFont,
//   space: defSpace,
//   fontSize: defFontSize,
//   boxShadow: defBoxShadow,
//   radii: defRadii,
//   breakpoints: defBreakpoints,
//   colors: defColors
// });
