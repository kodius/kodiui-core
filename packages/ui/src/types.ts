import { ElementType, HTMLAttributes } from "react";

export type FlexProperties =
  | "display"
  | "justifyContent"
  | "flexDirection"
  | "gap"
  | "alignItems"
  | "flexWrap";

export type SpaceProperties = "p" | "px";



export type AsComponentProp = { component?: ElementType };

export type NativeProps = Omit<HTMLAttributes<HTMLElement>, "color">;

