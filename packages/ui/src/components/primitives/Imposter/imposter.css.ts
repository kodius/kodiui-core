import { globalStyle, style } from "@vanilla-extract/css";

export const imposterStyle = style({
  insetBlockStart: "50%",
  insertInlineStart: "50%",
  transform: "translate(-50%, -50%)",
  opacity: 0
});

// globalStyle(`${imposterStyle} > *`, {
//   margin: "0px",
//   overflow: "auto",
//   maxInlineSize: "calc(100% - (var(--margin) * 2))",
//   maxBlockSize: "calc(100% - (var(--margin) * 2));",
// });
