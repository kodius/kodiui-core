import { vars } from "../styles/vars.css";
import {
  AnimationDirection,
  AnimationFillMode,
  AnimationIterationCount,
  AnimationPlayState,
  transitionTime,
} from "../styles/tokens/animations";

export const animationProperties = {
  animation: vars.animations,
  animationDuration: transitionTime,
  animationDelay: transitionTime,
  animationIterationCount: AnimationIterationCount,
  animationDirection: AnimationDirection,
  animationFillMode: AnimationFillMode,
  animationPlayState: AnimationPlayState,
  animationTimingFunction: vars.animationTimingFunction,
  transitionTimingFunction: vars.animationTimingFunction,
  transitionDuration: transitionTime,
};

export type AnimationPropertiesKeys = keyof typeof animationProperties;
