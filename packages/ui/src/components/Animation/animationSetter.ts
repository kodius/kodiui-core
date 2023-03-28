import { AnimationIterationCountType, AnimationTimingFunctionKeys, TransitionTime } from "../../styles/tokens/animations";
import { AnimationProps } from "./Animation";

export const animationSetter = (props: AnimationProps) => {
  const getDuration = (): TransitionTime => {
    switch (props.animation) {
      case "fadeIn":
      case "fadeOut":
      case "scaleUp":
      case "scaleDown":
      case "slideOutDown":
      case "slideOutRight":
      case "slideOutLeft":
      case "slideInUp":
      case "slideOutUp":
      case "slideInDown":
      case "slideInRight":
      case "shakeX":
      case "fadeInBloom":
      case "fadeOutBloom":
      case "bounce":
      case "spin":
      case "shakeY":
        return "0.7s";
      case "pulse":
        return "2s";
      case "ping":
        return "5s";
      case "blink":
        return "1s";
      case "float":
        return "3s";
      default:
        return "0.3s";
    }
  };

  const getIterationCount = (): AnimationIterationCountType => {
    switch (props.animation) {
      case "ping":
      case "blink":
      case "float":
      case "bounce":
      case "pulse":
      case "spin":
        return "infinite";
      default:
        return "unset";
    }
  };

  const getAnimationTimingFunction = (): AnimationTimingFunctionKeys => {
    switch (props.animation) {
      case "bounce":
        return "ease-squish-2";
      case "shakeX":
      case "shakeY":
        return "ease-out-5";
      case "ping":
      case "blink":
      case "float":
        return "ease-out-3";
      case "spin":
        return "linear";
      default:
        return "ease-3";
    }
  };

  const defineAnimation = () => {
    if (props.shouldAnimate === true) return props.animation;
    if (props.shouldAnimate === false) return undefined;
    return props.animation;
  };

  return {
    getDuration,
    getIterationCount: getIterationCount,
    getAnimationTimingFunction,
    defineAnimation,
  };
};
