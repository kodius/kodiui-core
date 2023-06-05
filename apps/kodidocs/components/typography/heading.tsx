import React, { ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { text, textAlign as textAlignToken } from "@/styles/tokens"

import { TypographyProps } from "./types"

type HeadingProps = VariantProps<typeof headingVariants> & TypographyProps

const headingVariants = cva("", {
  variants: {
    level: {
      "1": "scroll-m-20 text-4xl tracking-tight lg:text-5xl",
      "2": "scroll-m-20 pb-2 text-3xl tracking-tight transition-colors first:mt-0",
      "3": "scroll-m-20 text-2xl  tracking-tight",
      "4": "scroll-m-20 text-xl tracking-tight",
    },
    weight: {
      base: "font-semibold",
      bold: "font-extrabold",
    },
  },
  defaultVariants: {
    level: "1",
    weight: "base",
  },
})

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = "1", children, className, color, textAlign, ...props }, ref) => {
    const Comp = `h${level}` as "h1" | "h2" | "h3" | "h4"
    return (
      <Comp
        className={cn(
          headingVariants({ level, className }),
          color && text[color],
          textAlign && textAlignToken[textAlign]
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)

Heading.displayName = "Heading"

export { Heading }
