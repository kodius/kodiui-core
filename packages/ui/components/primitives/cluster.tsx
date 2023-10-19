import React from "react";

import { cn } from "@/lib/utils";
import { GapVariants } from "./tokens/spacing";
import { FlexVariants } from "./tokens/flex";

export type BoxProps = React.HTMLAttributes<HTMLDivElement> &
  GapVariants &
  FlexVariants;

export const Cluster = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ gap, className, flexDirection, justify, items, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex flex-wrap",
          gapVariants({ gap }),
          flexVariants({ flexDirection, justify, items }),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Cluster.displayName = "Cluster";
