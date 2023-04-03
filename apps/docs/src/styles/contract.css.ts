import { kodiContract, tokens, DarkColors } from "@kodiui/ui";
import { createTheme } from "@vanilla-extract/css";

// import FigmaTokens from "../tokens/playground-tokens.json";

// const figmaTokens = translateTokens(FigmaTokens["kodiui-ds"]);

// const { colors, ...restTokens } = figmaTokens;
const { colors, ...restTokens } = tokens;

export const COLORS = colors

export const lightTheme = createTheme(kodiContract, {
  ...restTokens,
  colors: COLORS,
});

export const darkTheme = createTheme(kodiContract, {
  ...restTokens,
  colors: DarkColors,
});
