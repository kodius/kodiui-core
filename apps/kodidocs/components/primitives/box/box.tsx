import React from "react"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { boxVariants } from "./variants"

export type BoxProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof boxVariants> & {
    as?: "div" | "h1" | "h2" | "h3" | "h4" | "p"
  }

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      className,
      gap,
      as,
      flexDirection,
      color,
      background,
      padding,
      position,
      display,
      flexWrap,
      alignItems,
      justifyContent,
      ...props
    },
    ref
  ) => {
    const Ele = as ? as : "div"
    return (
      <Ele
        className={cn(
          boxVariants({
            gap,
            flexDirection,
            color,
            background,
            padding,
            position,
            display,
            flexWrap,
            className,
            alignItems,
            justifyContent,
          })
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Box.displayName = "Box"

export { Box }
