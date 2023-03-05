import { defContract, kodiContract } from "@kodiui/ui";

import { createTheme } from "@vanilla-extract/css";

export const theme = createTheme(kodiContract, {
  ...defContract,
});
