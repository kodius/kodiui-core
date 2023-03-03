import { CSSProperties } from "@vanilla-extract/css";

interface FlexProperties {
  display: CSSProperties["display"][];
  alignItems: CSSProperties["alignItems"][];
  justifyContent: CSSProperties["justifyContent"][];
  flexDirection: CSSProperties["flexDirection"][];
  flexWrap: CSSProperties["flexWrap"][];
}

export type FlexPropertiesKeys = keyof typeof flexProperties;

export const flexProperties: FlexProperties = {
  display: [`none`, `block`, `inline`, `inline-block`, `flex`, `grid`],
  alignItems: [`flex-start`, `center`, `flex-end`, `baseline`],
  justifyContent: [
    `flex-start`,
    `center`,
    `flex-end`,
    `space-between`,
    "space-around",
  ],
  flexDirection: [
    `row`,
    `row-reverse`,
    `column`,
    `column-reverse`,
    "revert-layer",
  ],
  flexWrap: [
    `wrap`,
    `nowrap`,
    "unset",
    "revert",
    "inherit",
    "initial",
    "revert-layer",
    "wrap-reverse",
  ],
};
