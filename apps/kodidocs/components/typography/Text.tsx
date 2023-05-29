import React, { ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import clsx from "clsx"

import { cn } from "@/lib/utils"
import { Color, color as colors } from "@/styles/vars/colors"
import {
  JustifyContent,
  justifyContent as justify,
} from "@/styles/vars/display"

export type TextProps = VariantProps<typeof textVariants> & {
  className?: string
  color?: Color
  children: ReactNode
  icon?: ReactNode
  iconSide?: "right" | "left"
  justifyContent?: JustifyContent
}

const textVariants = cva("", {
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

const Text = React.forwardRef<HTMLHeadingElement, TextProps>(
  (
    {
      size,
      weight,
      className,
      color,
      icon,
      iconSide = "left",
      justifyContent,
      ...props
    },
    ref
  ) => {
    const content = (
      <p
        className={cn(
          textVariants({ size, weight, className }),
          color && colors[color]
        )}
        ref={ref}
        {...props}
      />
    )

    if (icon) {
      return (
        <span
          className={clsx("flex", justifyContent && justify[justifyContent])}
        >
          {iconSide === "left" && icon}
          {content}
          {iconSide === "right" && icon}
        </span>
      )
    }
    return content
  }
)

Text.displayName = "Text"

export { Text }
