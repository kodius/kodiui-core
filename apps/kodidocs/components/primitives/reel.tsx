import React from "react"
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark"

import { cn } from "@/lib/utils"
import {
  GapVariants,
  PaddingVariants,
  gapVariants,
  paddingVariants,
} from "@/styles/tokens/spacing"

export type BoxProps = React.HTMLAttributes<HTMLDivElement> &
  PaddingVariants &
  GapVariants & {
    noBar?: boolean
  }

export const Reel = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ gap, className, noBar, p, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex overflow-x-auto overflow-y-hidden",
          gapVariants({ gap }),
          paddingVariants({ p }),
          noBar && "no-scrollbar",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Reel.displayName = "Reel"
