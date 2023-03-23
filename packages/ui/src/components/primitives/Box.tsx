import { forwardRef, PropsWithChildren } from "react";
import { Sprinkles } from "../../styles/sprinkles.css";
import { AnimationPropertiesKeys } from "../../types/AnimationProperties";
import { Builder } from "../Builder";

type Props = PropsWithChildren<Omit<Sprinkles, AnimationPropertiesKeys>>;

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
