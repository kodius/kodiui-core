import { cva } from "class-variance-authority"

import { bottom } from "@/styles/vars/bottom"
import { background, color } from "@/styles/vars/colors"
import {
  alignItems,
  display,
  flexDirection,
  flexWrap,
  justifyContent,
  position,
  zIndex,
} from "@/styles/vars/display"
import { height } from "@/styles/vars/height"
import { left } from "@/styles/vars/left"
import { minWidth } from "@/styles/vars/min-width"
import { overflow } from "@/styles/vars/overflow"
import { right } from "@/styles/vars/right"
import { gap, p, pb, pl, pr, pt, px, py } from "@/styles/vars/spacing"
import { textAlign } from "@/styles/vars/text"
import { top } from "@/styles/vars/top"
import { width } from "@/styles/vars/width"

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
    minWidth,
    height,
    zIndex,
    top,
    left,
    right,
    bottom,
    overflow,
    textAlign,
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
