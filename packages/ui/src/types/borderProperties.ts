import { kodiContract } from "../styles/kodiContract.css";

export const borderProperties = {
  borderRadius: kodiContract.borderRadius,
  borderWidth: kodiContract.borderWidth,
  borderStyle: [
    "none",
    "hidden",
    "dotted",
    "dashed",
    "solid",
    "double",
    "groove",
    "ridge",
    "inset",
    "outset",
  ],
} as const;

export type BorderPropertiesKyes = keyof typeof borderProperties
