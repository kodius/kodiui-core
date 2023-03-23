import { TrnasitionTimingFunctionKeys } from "../../../styles/properties/transitionTimingFunction.css";
import { AnimationIterationCountType } from "../../../types/AnimationIterationCount";
import { TransitionTime } from "../../../types/AnimationProperties";
import { AnimationProps } from "./Animation";

export const animationSetter = (props: AnimationProps) => {
  const getDuration = (): TransitionTime => {
    switch (props.animation) {
      case "bounce":
        return "2s";
      default:
        return "0.3s";
    }
  };

  const getInterationCount = (): AnimationIterationCountType => {
    switch (props.animation) {
      case "bounce":
        return "infinite";
      default:
        return "unset";
    }
  };

  const getTransitionTimingFunction = (): TrnasitionTimingFunctionKeys => {
    switch (props.animation) {
      case "bounce":
        return "ease-squish-2";
      case "fade-out-bloom":
        return "ease-3";
      default:
        return "ease-1";
    }
  };

  const defineAnimation = () => {
    if (props.shouldAnimate === true) return props.animation;
    if (props.shouldAnimate === false) return undefined;
    return props.animation;
  };

  return {
    getDuration,
    getInterationCount,
    getTransitionTimingFunction,
    defineAnimation,
  };
};
