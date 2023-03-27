import { forwardRef, PropsWithChildren } from "react";
import { hardStyle, HardStyles } from "../../../styles/hardStyle";
import { BuilderInterface } from "../../../types";
import { AnimationPropertiesKeys } from "../../../types/AnimationProperties";
import { Builder } from "../../Builder";

export type BoxProps = Omit<BuilderInterface, AnimationPropertiesKeys> &
  HardStyles;

export const Box = forwardRef<HTMLElement, BoxProps>((props, ref) => (
  <Builder
    borderWidth={props.borderWidth || props.borderColor ? "sm" : undefined}
    borderStyle={props.borderStyle || props.borderColor ? "solid" : "none"}
    style={hardStyle(props)}
    ref={ref}
    {...props}
  >
    {props.children}
  </Builder>
));
