import React, { ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Color, color as colorVar } from "@/styles/vars/colors"
import { TextAlign, textAlign as textAlignVar } from "@/styles/vars/text"

export type TextProps = VariantProps<typeof textVariants> & {
  className?: string
  color?: Color
  textAlign?: TextAlign
  children: ReactNode
  withIcon?: boolean
}

const textVariants = cva("inline-block [&>svg]:inline-block", {
  variants: {
    size: {
      base: "text-base",
      xs: "text-xs",
      sm: "text-sm",
      lg: "text-lg",
    },
    weight: {
      base: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    size: "base",
    weight: "base",
  },
})

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (
    { withIcon, size, weight, className, color, textAlign, children, ...props },
    ref
  ) => {
    const Comp = withIcon ? "span" : "p"
    return (
      <Comp
        className={cn(
          textVariants({ size, weight, className }),
          color && colorVar[color],
          textAlign && textAlignVar[textAlign]
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)

Text.displayName = "Text"

export { Text }
