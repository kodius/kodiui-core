import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { kodiContract } from "./kodiContract.css";

const unresponsiveProperties = defineProperties({
  // examples
  properties: {
    // fontSize,
    // lineHeight: fontSize,
    textAlign: [`center`, `left`, `right`],
    textTransform: [`lowercase`, `uppercase`],
    fontWeight: [400, 500, 600, 700, 800],
    textDecoration: [`none`, `underline`],
    borderRadius: kodiContract.radii,
    boxShadow: kodiContract.boxShadow,
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
  conditions: {
    mobile: {},
    tablet: { "@media": `screen and (min-width: 768px)` },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  responsiveArray: [`mobile`, `tablet`, `desktop`],
  properties: {
    position: [`relative`],
    display: [`none`, `block`, `inline`, `inline-block`, `flex`],
    alignItems: [`flex-start`, `center`, `flex-end`, `baseline`],
    justifyContent: [`flex-start`, `center`, `flex-end`, `space-between`],
    flexDirection: [`row`, `row-reverse`, `column`, `column-reverse`],
    flexWrap: [`wrap`, `nowrap`],
    padding: kodiContract.space,
    paddingTop: kodiContract.space,
    paddingBottom: kodiContract.space,
    paddingLeft: kodiContract.space,
    paddingRight: kodiContract.space,
    margin: kodiContract.space,
    marginTop: kodiContract.space,
    marginBottom: kodiContract.space,
    marginLeft: kodiContract.space,
    marginRight: kodiContract.space,
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
