import React from 'react'

import { cn } from '@/lib/utils'
import { GapVariants, PaddingVariants, gapVariants, paddingVariants } from './tokens'

export type BoxProps = React.HTMLAttributes<HTMLDivElement> &
  PaddingVariants &
  GapVariants & {
    noBar?: boolean
  }

export const Reel = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ gap, className, noBar, p, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex overflow-x-auto overflow-y-hidden',
          gapVariants({ gap }),
          paddingVariants({ p }),
          noBar && 'no-scrollbar',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Reel.displayName = 'Reel'
