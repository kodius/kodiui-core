import React from "react"

import { cn } from "@/lib/utils"
import { GapVariants, gapVariants } from "@/styles/tokens/spacing"

export type SwitcherProps = React.HTMLAttributes<HTMLDivElement> & GapVariants

export const Switcher = React.forwardRef<HTMLDivElement, SwitcherProps>(
  ({ gap, className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex flex-row flex-wrap justify-start [&>*]:grow",
          gapVariants({ gap }),
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Switcher.displayName = "Switcher"
