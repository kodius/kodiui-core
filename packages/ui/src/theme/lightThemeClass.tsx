import { createTheme } from "@vanilla-extract/css";
import { colors } from "./colors";
import { commonVars } from "./commonVars";
import { vars } from "./vars";

export const lightThemeClass = createTheme(vars, {
  colors: {
    primary: colors.blue500,
    body: colors.gray700,
    background: colors.gray100,
    link: colors.blue800,
    linkHover: colors.blue600,
    ...colors,
  },
  ...commonVars,
});

export const darkThemeClass = createTheme(vars, {
  colors: {
    primary: colors.red500,
    body: colors.gray700,
    background: colors.gray100,
    link: colors.blue800,
    linkHover: colors.blue600,
    ...colors,
  },
  ...commonVars,
});
