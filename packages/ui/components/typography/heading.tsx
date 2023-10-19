import React, { PropsWithChildren } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { TextVariants, textVariants } from "@/styles/tokens/text";

type HeadingProps = VariantProps<typeof headingVariants> &
  TextVariants &
  PropsWithChildren & {
    className?: string;
  };

const headingVariants = cva("m-0 p-0", {
  variants: {
    level: {
      "1": "text-4xl lg:text-5xl leading-none",
      "2": "text-3xl transition-colors first:mt-0 leading-none",
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
    { level = "1", children, className, textAlign, weight, color, ...props },
    ref
  ) => {
    const Comp = `h${level}` as "h1" | "h2" | "h3" | "h4";
    return (
      <Comp
        className={cn(
          headingVariants({ level, weight }),
          textVariants({ textAlign, color }),
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
