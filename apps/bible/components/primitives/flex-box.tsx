import React from "react";

import { cn } from "@/lib/utils";
import {
  FlexVariants,
  GapVariants,
  PaddingVariants,
  flexVariants,
  gapVariants,
  paddingVariants,
} from "./tokens";

export type FlexBoxProps = React.HTMLAttributes<HTMLDivElement> &
  PaddingVariants &
  GapVariants &
  FlexVariants;

export const FlexBox = React.forwardRef<HTMLDivElement, FlexBoxProps>(
  (
    { p, gap, className, flexDirection, wrap, justify, items, ...props },
    ref
  ) => {
    return (
      <div
        className={cn(
          "flex flex-wrap",
          paddingVariants({ p }),
          gapVariants({ gap }),
          flexVariants({ flexDirection, justify, items, wrap }),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

FlexBox.displayName = "FlexBox";
