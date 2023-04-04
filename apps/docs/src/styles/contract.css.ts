import { vars, tokens, DarkColors } from "@kodiui/ui";
import { createTheme } from "@vanilla-extract/css";

// import FigmaTokens from "../tokens/playground-tokens.json";
// const figmaTokens = translateTokens(FigmaTokens["kodiui-ds"]);
// const { colors, ...restTokens } = figmaTokens;

const { colors, ...restTokens } = tokens;

export const lightTheme = createTheme(vars, {
  ...restTokens,
  colors,
});

export const darkTheme = createTheme(vars, {
  ...restTokens,
  colors: DarkColors,
});
