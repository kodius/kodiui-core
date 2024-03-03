import React, { PropsWithChildren } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { textVariants, TextVariants } from "./tokens";

type HeadingProps = VariantProps<typeof headingVariants> &
  TextVariants &
  PropsWithChildren & {
    className?: string;
  };

const headingVariants = cva("m-0 p-0", {
  variants: {
    as: {
      h1: "text-4xl lg:text-5xl leading-none",
      h2: "text-3xl transition-colors first:mt-0 leading-none",
      h3: "text-2xl leading-none",
      h4: "text-xl leading-none",
    },
    weight: {
      base: "font-semibold",
      bold: "font-extrabold",
    },
  },
  defaultVariants: {
    as: "h1",
    weight: "base",
  },
});

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    { as = "h1", children, className, textAlign, weight, tone, ...props },
    ref
  ) => {
    const Comp = `${as}` as "h1" | "h2" | "h3" | "h4";
    return (
      <Comp
        className={cn(
          headingVariants({ as, weight }),
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
