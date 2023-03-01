import classNames from "classnames";
import { createElement, forwardRef, PropsWithChildren } from "react";
import { Sprinkles, sprinkles } from "../../styles/sprinkles.css";
import { AsComponentProp, NativeProps } from "../../types";

type ComponentProps = Sprinkles;

type Props = PropsWithChildren<NativeProps & AsComponentProp & ComponentProps>;

export const Builder = forwardRef<HTMLElement, Props>(
  ({ component = "div", className, ...rest }, ref) => {
    const sprinklesProps: Record<string, unknown> = {};
    const nativeProps: Record<string, unknown> = {};

    for (const key in rest) {
      if (sprinkles.properties.has(key as keyof Sprinkles)) {
        sprinklesProps[key] = rest[key as keyof typeof rest];
      } else {
        nativeProps[key] = rest[key as keyof typeof rest];
      }
    }

    return createElement(component, {
      ref,
      className: classNames(sprinkles(sprinklesProps), className),
      ...nativeProps,
    });
  }
);
