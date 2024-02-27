import React, { PropsWithChildren } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { textVariants, TextVariants } from "./tokens";

type HeadingProps = VariantProps<typeof headingVariants> &
  TextVariants &
  PropsWithChildren & {
    className?: string;
  };

const headingVariants = cva("", {
  variants: {
    level: {
      "1": "text-4xl lg:text-5xl leading-none",
      "2": "text-3xl leading-none",
      "3": "text-2xl leading-none",
      "4": "text-xl leading-none",
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
});

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    { level = "1", children, className, textAlign, weight, tone, ...props },
    ref
  ) => {
    const Comp = `h${level}` as "h1" | "h2" | "h3" | "h4";
    return (
      <Comp
        className={cn(
          headingVariants({ level, weight }),
          textVariants({ textAlign, tone }),
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Heading.displayName = "Heading";

export { Heading };
