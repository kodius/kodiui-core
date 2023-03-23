import { forwardRef, PropsWithChildren } from "react";
import { AnimationPropertiesKeys } from "../../types/AnimationProperties";
import { Builder } from "../Builder";
import { BuilderInterface } from "../../types";

type Props = PropsWithChildren<Omit<BuilderInterface, AnimationPropertiesKeys>>;

export const Box = forwardRef<HTMLElement, Props>((props, ref) => (
  <Builder
    p={props.padding || "sm"}
    borderWidth={props.borderWidth || props.borderColor ? "sm" : undefined}
    borderStyle={props.borderStyle || props.borderColor ? "solid" : "none"}
    ref={ref}
    {...props}
  >
    {props.children}
  </Builder>
));
