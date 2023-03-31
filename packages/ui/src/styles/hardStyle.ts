import { CSSProperties } from "@vanilla-extract/css";
import React from "react";
import { BoxProps } from "../components/primitives/Box/Box";

export interface HardStyles {
  __margin?: CSSProperties["margin"] | number;
  __padding?: CSSProperties["padding"] | number;
  __background?: CSSProperties["background"];
  __width?: CSSProperties["width"] | number;
  __minWidth?: CSSProperties["minWidth"] | number;
  __maxWidth?: CSSProperties["maxWidth"] | number;
  __height?: CSSProperties["height"] | number;
  __minHeight?: CSSProperties["minHeight"] | number;
  __maxHeight?: CSSProperties["maxHeight"] | number;
  __top?: CSSProperties["top"] | number;
  __left?: CSSProperties["left"] | number;
  __bottom?: CSSProperties["bottom"] | number;
  __right?: CSSProperties["right"] | number;
}

export const hardStyle = (props: BoxProps): React.CSSProperties | undefined => {
  return {
    margin: props.__margin,
    padding: props.__padding,
    background: props.__background,
    width: props.__width,
    minWidth: props.__minWidth,
    maxWidth: props.__maxWidth,
    height: props.__height,
    minHeight: props.__minHeight,
    maxHeight: props.__maxHeight,
    top: props.__top,
    left: props.__left,
    bottom: props.__bottom,
    right: props.__right,
    ...props.style,
  };
};
