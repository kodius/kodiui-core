import { kodiContract } from "../styles/kodiContract.css";

export const flexProperties = {
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
  gap: kodiContract.space,
} as const;

export type FlexPropertiesKeys = keyof typeof flexProperties;
