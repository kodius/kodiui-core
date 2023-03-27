import { CSSProperties } from "@vanilla-extract/css";
import React from "react";
import { BoxProps } from "../components/primitives/Box/Box";

//test

export interface HardStyles {
  __margin?: CSSProperties["margin"] | number;
  __padding?: CSSProperties["padding"] | number;
  __background?: CSSProperties["background"];
}

export const hardStyle = (props: BoxProps): React.CSSProperties | undefined => {
  return {
    margin: props.__margin,
    padding: props.__padding,
    background: props.__background,
    ...props.style,
  };
};
