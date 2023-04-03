import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { animationProperties } from "../types/AnimationProperties";
import { borderProperties } from "../types/borderProperties";
import { cursorProperties } from "../types/cursorProperites";
import { flexProperties } from "../types/flexProperites";
import { heightProperties } from "../types/heightProperties";
import { spaceProperties } from "../types/spaceProperties";
import { typographyProperties } from "../types/typographyProperties";
import { widthProperties } from "../types/widthProperties.css";
import { kodiContract } from "./kodiContract.css";

import "./reset.css.ts";
import { BreakPoints } from "./tokens/break-points.css";

const unresponsiveProperties = defineProperties({
  properties: {
    boxShadow: kodiContract.boxShadow,
    cursor: cursorProperties,
    ...borderProperties,
    ...animationProperties,
    ...typographyProperties,
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
    mobileExtraSmall: {},
    mobileSmall: {
      "@media": `screen and (min-width: ${BreakPoints.mobileSmall})`,
    },
    mobile: { "@media": `screen and (min-width: ${BreakPoints.mobile})` },
    tabletSmall: {
      "@media": `screen and (min-width: ${BreakPoints.tabletSmall})`,
    },
    tablet: { "@media": `screen and (min-width: ${BreakPoints.tablet})` },
    desktop: { "@media": `screen and (min-width: ${BreakPoints.desktop})` },
    desktopLarge: {
      "@media": `screen and (min-width: ${BreakPoints.desktopLarge})`,
    },
  },
  defaultCondition: "mobileExtraSmall",
  responsiveArray: [
    `mobileExtraSmall`,
    `mobileSmall`,
    `mobile`,
    `tabletSmall`,
    `tablet`,
    `desktop`,
    `desktopLarge`,
  ],
  properties: {
    position: [
      "static",
      "absolute",
      "fixed",
      "relative",
      "sticky",
      "initial",
      "inherit",
    ] as const,
    width: widthProperties,
    maxWidth: widthProperties,
    minWidth: widthProperties,
    height: heightProperties,
    zIndex: {
      "0": 0,
      "10": 10,
      "20": 20,
      "30": 30,
      "40": 40,
      "50": 50,
      "60": 60,
      "70": 70,
      "80": 80,
      "90": 90,
      "100": 100,
      auto: "auto",
    },
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
