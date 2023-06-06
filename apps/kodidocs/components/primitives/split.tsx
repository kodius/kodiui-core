import React from "react"

import { cn } from "@/lib/utils"

import { GapVariants, gapVariants } from "./variants/spacing"

export type SplitProps = React.HTMLAttributes<HTMLDivElement> & GapVariants

export const Split = React.forwardRef<HTMLDivElement, SplitProps>(
  ({ gap, className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex flex-wrap justify-between",
          gapVariants({ gap }),
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Split.displayName = "Split"
