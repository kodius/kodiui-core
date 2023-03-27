import { globalStyle, style } from "@vanilla-extract/css";

export const SwitherStyle = style({});

globalStyle(`${SwitherStyle} > *`, {
  flexGrow: 1,
  flexBasis: " calc(( 30rem - 100%) * 999)",
});

globalStyle(
  `${SwitherStyle} > :nth-last-child(n + 7), ${SwitherStyle} > :nth-last-child(n+7) ~ *`,
  {
    flexBasis: "100%",
  }
);
