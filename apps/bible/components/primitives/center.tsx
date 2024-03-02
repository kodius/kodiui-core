import React, { FC, ReactNode } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import clsx from 'clsx'

type PaddingVariants = VariantProps<typeof centerVarints>

type CenterProps = {
  children: ReactNode
  className?: string
} & PaddingVariants

const centerVarints = cva('flex', {
  variants: {
    direction: {
      horizontal: `flex-col items-center`,
      vertical: `flex-col justify-center h-full`,
      center: `justify-center items-center h-full`,
    },
  },
  defaultVariants: {
    direction: 'horizontal',
  },
})

export const Center: FC<CenterProps> = ({ children, direction = 'horizontal', className, ...props }) => {
  return (
    <div {...props} className={clsx(centerVarints({ direction }), className)}>
      {children}
    </div>
  )
}
