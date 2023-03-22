import { forwardRef } from "react";
import { BuilderInterface } from "../../types";
import { Builder } from "../Builder/Builder";

export const Box = forwardRef<HTMLElement, BuilderInterface>((props, ref) => (
  <Builder
    p={props.padding || "sm"}
    borderWidth={props.borderWidth || props.borderColor ? "sm" : undefined}
    borderStyle={props.borderStyle || props.borderColor ? "solid" : "none"}
    animationDuration={props.animationDuration || props.animation ? "0.3s" : undefined}
    ref={ref}
    {...props}
  >
    {props.children}
  </Builder>
));
