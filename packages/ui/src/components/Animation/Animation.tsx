import { forwardRef } from "react";
import { AnimationPlayStateType } from "../../styles/tokens/animations";
import { BuilderInterface } from "../../types";
import { Builder } from "../Builder";
import { animationSetter } from "./animationSetter";

export interface AnimationProps extends BuilderInterface {
  shouldAnimate?: boolean;
  animateOnHover?: boolean;
}

export const Animation = forwardRef<HTMLElement, AnimationProps>(
  (props, ref) => {
    const {
      getDuration,
      getIterationCount: getIterationCount,
      getAnimationTimingFunction,
      defineAnimation,
    } = animationSetter(props);

    const definePlayState = (): AnimationPlayStateType => {
      if (props.animateOnHover) {
      }
      return "none";
    };

    return (
      <Builder
        ref={ref}
        animation={defineAnimation()}
        animationPlayState={definePlayState()}
        animationDuration={props.animationDuration || getDuration()}
        animationIterationCount={
          props.animationIterationCount || getIterationCount()
        }
        animationTimingFunction={
          props.animationTimingFunction || getAnimationTimingFunction()
        }
        {...props}
      >
        {props.children}
      </Builder>
    );
  }
);
