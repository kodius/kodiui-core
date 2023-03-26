import { createThemeContract } from "@vanilla-extract/css";
import { properties } from "./properties/index.css";

export const kodiContract = createThemeContract({
  ...properties,
});
