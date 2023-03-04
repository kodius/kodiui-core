import { createThemeContract } from "@vanilla-extract/css";
import { defContract } from "./properties/index.css";

export const kodiContract = createThemeContract({
  ...defContract,
});
