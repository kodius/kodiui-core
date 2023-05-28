import { cva } from "class-variance-authority"

import {
  alignItems,
  background,
  bottom,
  color,
  display,
  flexDirection,
  flexWrap,
  gap,
  height,
  justifyContent,
  left,
  overflow,
  p,
  pb,
  pl,
  position,
  pr,
  pt,
  px,
  py,
  right,
  top,
  width,
  zIndex,
} from "@/styles/vars"

export const boxVariants = cva("", {
  variants: {
    gap,
    p,
    px,
    py,
    pb,
    pl,
    pr,
    pt,
    position,
    background,
    color,
    display,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    width,
    height,
    zIndex,
    top,
    left,
    right,
    bottom,
    overflow,
  },
  defaultVariants: {
    //
  },
})

// -------------- EXMAPLE
//
// <Box position="absolute" padding="lg" gap="sm">
//   box
// </Box>
//
