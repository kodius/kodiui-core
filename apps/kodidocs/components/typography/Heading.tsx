import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

type HeadingProps = React.HTMLAttributes<HTMLHeadElement> &
  VariantProps<typeof headingVariants>

const headingVariants = cva("", {
  variants: {
    level: {
      "1": "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      "2": "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
      "3": "scroll-m-20 text-2xl font-semibold tracking-tight",
      "4": "scroll-m-20 text-xl font-semibold tracking-tight",
    },
  },
  defaultVariants: {
    level: "1",
  },
})

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level, children, className, ...props }, ref) => {
    const Comp = `h${level}` as "h1" | "h2" | "h3" | "h4"
    return (
      <Comp
        className={cn(headingVariants({ level, className }))}
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
