import React, { PropsWithChildren } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { textVariants, TextVariants } from "./tokens";

type TextProps = VariantProps<typeof textCustomVariants> &
  TextVariants &
  PropsWithChildren & {
    className?: string;
    withIcon?: boolean;
  };

const textCustomVariants = cva("inline-block [&>svg]:inline-block", {
  variants: {
    size: {
      base: "text-base leading-none",
      xs: "text-xs leading-none",
      sm: "text-sm leading-none",
      lg: "text-lg leading-none",
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
});

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      withIcon,
      size,
      weight,
      className,
      tone,
      color,
      children,
      textAlign,
      ...props
    },
    ref
  ) => {
    const Comp = withIcon ? "span" : "p";
    return (
      <Comp
        className={cn(
          textCustomVariants({ size, weight, tone, className }),
          textVariants({ textAlign, color })
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Text.displayName = "Text";

export { Text };
