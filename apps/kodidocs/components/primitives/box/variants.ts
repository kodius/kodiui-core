import { cva } from "class-variance-authority"

import {
  alignItems,
  backgroundColors,
  display,
  flexDirection,
  flexWrap,
  justifyContent,
  position,
  textColors,
  width,
  height,
  gap,
  padding,
  paddingY,
  paddingX,
  paddingB,
  paddingL,
  paddingR,
  paddingT,
} from "@/styles/vars"

export const boxVariants = cva("", {
  variants: {
    gap: gap,
    p: padding,
    px: paddingX,
    py: paddingY,
    pb: paddingB,
    pl: paddingL,
    pr: paddingR,
    pt: paddingT,
    position: position,
    background: backgroundColors,
    color: textColors,
    display: display,
    flexDirection: flexDirection,
    flexWrap: flexWrap,
    justifyContent: justifyContent,
    alignItems: alignItems,
    width: width,
    height: height
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
