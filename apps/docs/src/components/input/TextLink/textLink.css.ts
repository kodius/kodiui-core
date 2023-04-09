import { globalStyle, style } from "@vanilla-extract/css";

export const textLinkStyle = style({});

globalStyle(`${textLinkStyle} svg`, {
  stroke: "currentcolor",
  fill: "currentcolor",
  width: "1.2em",
  height: "1.2em"
});
