import { vars } from "../styles/vars.css";

export const typographyProperties = {
  textAlign: ["left", "right", "center", "justify", "initial", "inherit"],
  fontSize: vars.fontSize,
  textTransform: [
    "none",
    "capitalize",
    "uppercase",
    "lowercase",
    "initial",
    "inherit",
  ],
  fontWeight: [
    "normal",
    "bold",
    "bolder",
    "lighter",
    "initial",
    "inherit",
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
  ],
  textDecoration: [`none`, `underline`],
} as const;

export type TypographyPropertieKyes = keyof typeof typographyProperties;
