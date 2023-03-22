import classNames from "classnames";
import { createElement, forwardRef } from "react";
import { Sprinkles, sprinkles } from "../../styles/sprinkles.css";
import { BuilderProps } from "../../types";

export const Builder = forwardRef<HTMLElement, BuilderProps>(
  ({ as = "div", className, ...rest }, ref) => {
    const sprinklesProps: Record<string, unknown> = {};
    const nativeProps: Record<string, unknown> = {};

    for (const key in rest) {
      if (sprinkles.properties.has(key as keyof Sprinkles)) {
        sprinklesProps[key] = rest[key as keyof typeof rest];
      } else {
        nativeProps[key] = rest[key as keyof typeof rest];
      }
    }

    return createElement(as, {
      ref,
      className: classNames(sprinkles(sprinklesProps), className),
      ...nativeProps,
    });
  }
);
