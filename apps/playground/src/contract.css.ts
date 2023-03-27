import { kodiContract, tokens, translateTokens } from "@kodiui/ui";
import { createTheme } from "@vanilla-extract/css";
import FigmaTokens from "../tokens/playground-tokens.json";

const figmaTokens = translateTokens(FigmaTokens["kodiui-ds"]);

export const theme = createTheme(kodiContract, {
  ...tokens,
  // ...figmaTokens
});
