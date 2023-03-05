import { forwardRef, PropsWithChildren } from "react";
import { Sprinkles } from "../../styles/sprinkles.css";
import { AsComponentProp, NativeProps } from "../../types";
import { FlexPropertiesKeys } from "../../types/flexProperites";
import { Builder } from "../Builder/Builder";

type ComponentProps = Omit<Sprinkles, FlexPropertiesKeys>;

type Props = PropsWithChildren<NativeProps & AsComponentProp & ComponentProps>;

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
