import React from 'react'

import { cn } from '@/lib/utils'
import { HiddenVariants, hiddenVariants } from './tokens'

export type BoxProps = React.HTMLAttributes<HTMLDivElement> & HiddenVariants

export const Hidden = React.forwardRef<HTMLDivElement, BoxProps>(({ above, below, className, ...props }, ref) => {
  return <div className={cn(hiddenVariants({ above, below }), className)} ref={ref} {...props} />
})

Hidden.displayName = 'Hidden'
