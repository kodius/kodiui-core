import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { vars } from "../theme/vars";

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    display: ["none", "flex", "block", "inline"],
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    // borderRadius: borderRadius,
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
      "initial",
      "inherit",
    ],
    // borderColor: colors,
    borderWidth: ["thick", "thin"],
    // width: space,
    // height: space,
    border: {
      thin: {
        // borderRadius: colors.blue5,
        borderWidth: "thin",
        borderStyle: "solid",
      },
      thick: {
        // borderRadius: colors.blue5,
        borderWidth: "thick",
        borderStyle: "solid",
      },
      medium: {
        // borderRadius: colors.blue5,
        borderWidth: "medium",
        borderStyle: "solid",
      },
    },
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    // paddingTop: space,
    // paddingBottom: space,
    // paddingLeft: space,
    // paddingRight: space,
  },
  shorthands: {
    // space: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    // spaceX: ["paddingLeft", "paddingRight"],
    // spaceY: ["paddingTop", "paddingBottom"],
    placeItems: ["justifyContent", "alignItems"],
  },
});

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: "lightMode",
  properties: {
    color: vars.colors,
    background: vars.colors,
  },
});


export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
