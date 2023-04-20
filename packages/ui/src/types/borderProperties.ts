import { vars } from "../styles/vars.css";

const borderStyle = [
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
];

export const borderProperties = {
  borderRadius: vars.borderRadius,
  borderWidth: vars.borderWidth,
  borderStyle: borderStyle,

  borderRightWidth: vars.borderWidth,
  borderLeftWidth: vars.borderWidth,

  borderLeftStyle: borderStyle,
  borderRightStyle: borderStyle,
} as const;

export type BorderPropertiesKyes = keyof typeof borderProperties;
