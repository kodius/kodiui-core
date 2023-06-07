import React from "react"

import { cn } from "@/lib/utils"
import { PaddingVariants, paddingVariants } from "@/styles/tokens/spacing"

export type BoxProps = React.HTMLAttributes<HTMLDivElement> & PaddingVariants

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ p, className, ...props }, ref) => {
    return (
      <div
        className={cn(paddingVariants({ p }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)

Box.displayName = "Box"

export { Box }
