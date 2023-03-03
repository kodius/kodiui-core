import { ElementType, HTMLAttributes } from "react";

export type AsComponentProp = { component?: ElementType };

export type NativeProps = Omit<HTMLAttributes<HTMLElement>, "color">;
