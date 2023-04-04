import { vars } from "../styles/vars.css";

export const borderProperties = {
  borderRadius: vars.borderRadius,
  borderWidth: vars.borderWidth,
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
