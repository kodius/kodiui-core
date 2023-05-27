import { cva } from "class-variance-authority"

import {
  alignItems,
  backgroundColors,
  display,
  flexDirection,
  flexWrap,
  gapSpacing,
  justifyContent,
  paddingSpacing,
  position,
  textColors,
  width,
  height
} from "@/styles/vars"

export const boxVariants = cva("", {
  variants: {
    gap: gapSpacing,
    padding: paddingSpacing,
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
