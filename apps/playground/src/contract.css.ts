import { properties, kodiContract, translateTokens } from "@kodiui/ui";

import { createTheme } from "@vanilla-extract/css";
import tokens from "../tokens/playground-tokens.json";

export type PropertyKeys = keyof typeof properties;


const figmaTokens = translateTokens(tokens["kodiui-ds"]);

export const theme = createTheme(kodiContract, {
  ...figmaTokens
});
