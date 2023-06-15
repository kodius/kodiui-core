import React from "react"

import { cn } from "@/lib/utils"
import { FlexVariants, flexVariants } from "@/styles/tokens/flex"
import { GapVariants, gapVariants } from "@/styles/tokens/spacing"

export type SplitProps = React.HTMLAttributes<HTMLDivElement> &
  GapVariants &
  FlexVariants

export const Split = React.forwardRef<HTMLDivElement, SplitProps>(
  ({ gap, className, justify, items, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex flex-wrap justify-between",
          gapVariants({ gap }),
          flexVariants({ justify, items }),
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Split.displayName = "Split"
