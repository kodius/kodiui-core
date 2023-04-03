import { kodiContract } from "../styles/kodiContract.css";
import {
  AnimationDirection,
  AnimationFillMode,
  AnimationIterationCount,
  AnimationPlayState,
  transitionTime,
} from "../styles/tokens/animations";

export const animationProperties = {
  animation: kodiContract.animations,
  animationDuration: transitionTime,
  animationDelay: transitionTime,
  animationIterationCount: AnimationIterationCount,
  animationDirection: AnimationDirection,
  animationFillMode: AnimationFillMode,
  animationPlayState: AnimationPlayState,
  animationTimingFunction: kodiContract.animationTimingFunction,
  transitionTimingFunction: kodiContract.animationTimingFunction,
};

export type AnimationPropertiesKeys = keyof typeof animationProperties;
