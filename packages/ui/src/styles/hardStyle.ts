import { CSSProperties } from "@vanilla-extract/css";
import React from "react";
import { BoxProps } from "../components/primitives/Box/Box";

export interface HardStyles {
  __margin?: CSSProperties["margin"] | number;
  __padding?: CSSProperties["padding"] | number;
  __background?: CSSProperties["background"];
  __width?: CSSProperties["width"] | number;
  __minwidth?: CSSProperties["minWidth"] | number;
  __maxwidth?: CSSProperties["maxWidth"] | number;
  __height?: CSSProperties["height"] | number;
  __minheight?: CSSProperties["minHeight"] | number;
  __maxheight?: CSSProperties["maxHeight"] | number;
  __top?: CSSProperties["top"] | number;
  __left?: CSSProperties["left"] | number;
  __bottom?: CSSProperties["bottom"] | number;
  __right?: CSSProperties["right"] | number;
  __flexBasis: CSSProperties["flexBasis"] | string;
}

export const hardStyle = (props: BoxProps): React.CSSProperties | undefined => {
  return {
    margin: props.__margin,
    padding: props.__padding,
    background: props.__background,
    width: props.__width,
    minWidth: props.__minwidth,
    maxWidth: props.__maxwidth,
    height: props.__height,
    minHeight: props.__minheight,
    maxHeight: props.__maxheight,
    top: props.__top,
    left: props.__left,
    bottom: props.__bottom,
    right: props.__right,
    flexBasis: props.__flexBasis,
    ...props.style,
  };
};
