import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { Box, BoxProps } from "../primitives/box/box"

type HeadingProps = VariantProps<typeof headingVariants> & BoxProps

const headingVariants = cva("", {
  variants: {
    level: {
      "1": "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      "2": "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
      "3": "scroll-m-20 text-2xl font-semibold tracking-tight",
      "4": "scroll-m-20 text-xl font-semibold tracking-tight",
    },
  },
  defaultVariants: {
    level: "1",
  },
})

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = "1", children, className, ...props }, ref) => {
    const as = `h${level}` as "h1" | "h2" | "h3" | "h4"
    return (
      <Box
        as={as}
        className={cn(headingVariants({ level, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    )
  }
)

Heading.displayName = "Heading"

export { Heading }
