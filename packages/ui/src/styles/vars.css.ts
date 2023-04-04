import { createThemeContract } from "@vanilla-extract/css";
import { tokens } from "./tokens/index.css";

export const vars = createThemeContract({
  ...tokens,
});
