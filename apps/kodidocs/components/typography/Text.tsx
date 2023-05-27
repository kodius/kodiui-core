import React, { ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

type TextProps = VariantProps<typeof textVariants> & {
  className?: string
  children: ReactNode
}

const textVariants = cva("", {
  variants: {
    variant: {
      default: "leading-7 [&:not(:first-child)]:mt-6",
      blockQute: "mt-6 border-l-2 pl-6 italic",
      inlineCode:
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      lead: "text-xl text-muted-foreground",
      lg: "text-lg font-semibold",
      sm: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const Text = React.forwardRef<HTMLHeadingElement, TextProps>(
  ({ variant, className, ...props }, ref) => {
    return (
      <p
        className={cn(textVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Text.displayName = "Text"

export { Text }
