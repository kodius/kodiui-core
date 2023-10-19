import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { GapVariants, gapVariants } from "@/styles/tokens/spacing";

export type StackProps = React.HTMLAttributes<HTMLDivElement> & GapVariants;

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ gap, className, ...props }, ref) => {
    return (
      <div
        className={cn("flex flex-col", gapVariants({ gap }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Stack.displayName = "Stack";
