import {
  ElementType,
  HTMLAttributes,
  PropsWithChildren,
} from "react";
import { Sprinkles } from "./styles/sprinkles.css";

export type AsElement = { as?: ElementType };

export type NativeProps = Omit<HTMLAttributes<HTMLElement>, "color">;

export type BuilderProps = PropsWithChildren<
  NativeProps & AsElement & Sprinkles
>;

export interface BuilderInterface extends NativeProps, AsElement, Sprinkles, PropsWithChildren {
}
