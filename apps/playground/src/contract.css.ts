import { defContract, kodiContract } from "@kodiui/ui";

import { createTheme } from "@vanilla-extract/css";

console.log('contract',defContract);


export const theme = createTheme(kodiContract, {
  ...defContract,
});
