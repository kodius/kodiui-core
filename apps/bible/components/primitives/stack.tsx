import React from 'react'

import { cn } from '@/lib/utils'
import { GapVariants, gapVariants } from './tokens'

export type StackProps = React.HTMLAttributes<HTMLDivElement> & GapVariants

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(({ gap, className, ...props }, ref) => {
  return <div className={cn('flex flex-col', gapVariants({ gap }), className)} ref={ref} {...props} />
})

Stack.displayName = 'Stack'
