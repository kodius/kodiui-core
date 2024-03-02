import React, { FC, ReactNode } from 'react'
import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { GapVariants, gapVariants } from './tokens'

type SidebarVariants = VariantProps<typeof sidebarVariants>

type SidebarProps = SidebarVariants &
  GapVariants & {
    children: ReactNode
    className?: string
  }

const sidebarVariants = cva('flex flex-wrap', {
  variants: {
    side: {
      left: `[&>*:first-child]:grow [&>*:last-child]:grow-[999] [&>*:last-child]:basis-0 [&>*:last-child]:min-w-[50%]`,
      right: `[&>*:last-child]:grow [&>*:first-child]:basis-0 [&>*:first-child]:grow-[999] [&>*:first-child]:min-w-[50%]`,
    },
  },
  defaultVariants: {
    side: 'left',
  },
})
export const Sidebar: FC<SidebarProps> = ({ children, gap, side = 'left', className, ...props }) => {
  return (
    <div className={cn(gapVariants({ gap }), sidebarVariants({ side }))} {...props}>
      {children}
    </div>
  )
}
