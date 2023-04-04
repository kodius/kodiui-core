import { forwardRef } from "react";
import { hardStyle, HardStyles } from "../../../styles/hardStyle";
import { BuilderInterface } from "../../../types";
import { AnimationPropertiesKeys } from "../../../types/AnimationProperties";
import { Builder } from "../../Builder";

export type BoxProps = Omit<BuilderInterface, AnimationPropertiesKeys> &
  HardStyles;

export const Box = forwardRef<HTMLElement, BoxProps>((props, ref) => (
  <Builder
    style={hardStyle(props)}
    ref={ref}
    {...props}
  >
    {props.children}
  </Builder>
));
