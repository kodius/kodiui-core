import React, { PropsWithChildren } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { TextVariants, textVariants } from "../primitives/variants/text"

type TextProps = VariantProps<typeof textCustomVariants> &
  TextVariants &
  PropsWithChildren & {
    className?: string
    withIcon?: boolean
  }

const textCustomVariants = cva("inline-block [&>svg]:inline-block", {
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
    tone: {
      base: "text-white",
      muted: "text-gray-500",
    },
  },
  defaultVariants: {
    size: "base",
    weight: "base",
    tone: "base",
  },
})

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (
    { withIcon, size, weight, className, tone, children, textAlign, ...props },
    ref
  ) => {
    const Comp = withIcon ? "span" : "p"
    return (
      <Comp
        className={cn(
          textCustomVariants({ size, weight, tone, className }),
          textVariants({ textAlign })
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
