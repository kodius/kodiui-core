import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { animationProperties } from "../types/AnimationProperties";
import { flexProperties } from "../types/flexProperites";
import { spaceProperties } from "../types/spaceProperties";
import { kodiContract } from "./kodiContract.css";
import { BreakPoints } from "./properties/break-points";

const unresponsiveProperties = defineProperties({
  properties: {
    textAlign: [`center`, `left`, `right`],
    textTransform: [`lowercase`, `uppercase`],
    fontWeight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    textDecoration: [`none`, `underline`],
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
    boxShadow: kodiContract.boxShadow,
    ...animationProperties
  },
});

const colorProperties = defineProperties({
  conditions: {
    light: {
      "@media": `(prefers-color-scheme: light)`,
    },
    dark: { "@media": `(prefers-color-scheme: dark)` },
    hover: { selector: `&:hover` },
    focus: { selector: `&:focus` },
  },
  defaultCondition: ["light", "dark"],
  properties: {
    color: kodiContract.colors,
    background: kodiContract.colors,
    borderColor: kodiContract.colors,
  },
});

const responsiveProperties = defineProperties({
  // TODO
  // xl: { "@media": `screen and (min-width: ${kodiContract.breakpoints.xl})` },
  // this dose not work. vars can not be here.
  conditions: {
    xxs: {},
    xs: { "@media": `screen and (min-width: ${BreakPoints.xs})` },
    sm: { "@media": `screen and (min-width: ${BreakPoints.sm})` },
    md: { "@media": `screen and (min-width: ${BreakPoints.md})` },
    lg: { "@media": `screen and (min-width: ${BreakPoints.lg})` },
    xl: { "@media": `screen and (min-width: ${BreakPoints.xl})` },
    xxl: { "@media": `screen and (min-width: ${BreakPoints.xxl})` },
  },
  defaultCondition: "xxs",
  responsiveArray: [`xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`],
  properties: {
    position: [`relative`],
    ...flexProperties,
    ...spaceProperties,
  },
  shorthands: {
    p: [`paddingTop`, `paddingBottom`, `paddingLeft`, `paddingRight`],
    px: [`paddingLeft`, `paddingRight`],
    py: [`paddingTop`, `paddingBottom`],
    m: [`marginTop`, `marginBottom`, `marginLeft`, `marginRight`],
    mx: [`marginLeft`, `marginRight`],
    my: [`marginTop`, `marginBottom`],
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  colorProperties,
  unresponsiveProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
