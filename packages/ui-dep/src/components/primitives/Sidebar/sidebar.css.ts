import { globalStyle, style } from "@vanilla-extract/css";

export const SidebarOnLeft = style({});
export const SidebarOnRight = style({});

globalStyle(`${SidebarOnLeft} > :first-child`, {
  flexGrow: 1,
});

globalStyle(`${SidebarOnLeft} > :last-child`, {
  flexBasis: 0,
  flexGrow: 999,
  minInlineSize: "50%",
});

globalStyle(`${SidebarOnRight} > :last-child`, {
  flexGrow: 1,
});

globalStyle(`${SidebarOnRight} > :first-child`, {
  flexBasis: 0,
  flexGrow: 999,
  minInlineSize: "50%",
});
