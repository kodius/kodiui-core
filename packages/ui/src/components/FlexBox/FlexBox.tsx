import { forwardRef, PropsWithChildren } from "react";
import { Sprinkles } from "../../styles/sprinkles.css";
import { AsComponentProp, NativeProps } from "../../types";
import { Builder } from "../Builder/Builder";

type ComponentProps = Sprinkles;

type Props = PropsWithChildren<NativeProps & AsComponentProp & ComponentProps>;

export const FlexBox = forwardRef<HTMLElement, Props>((props, ref) => (
  <Builder
    display={props.display || "flex"}
    p={props.p || "sm"}
    ref={ref}
    {...props}
  >
    {props.children}
  </Builder>
));
