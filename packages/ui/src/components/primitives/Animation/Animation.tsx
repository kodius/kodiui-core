import { forwardRef, PropsWithChildren } from "react";
import { Sprinkles } from "../../../styles/sprinkles.css";
import { AnimationPropertiesKeys } from "../../../types/AnimationProperties";
import { Builder } from "../../Builder";
import { animationSetter } from "./animationSetter";

interface CustomAnimationArguments {
  shouldAnimate?: boolean;
}

export type AnimationProps = PropsWithChildren<
  Pick<Sprinkles, AnimationPropertiesKeys>
> &
  CustomAnimationArguments;

export const Animation = forwardRef<HTMLElement, AnimationProps>(
  (props, ref) => {
    const {
      getDuration,
      getInterationCount,
      getAnimationTimingFunction,
      defineAnimation,
    } = animationSetter(props);

    return (
      <Builder
        ref={ref}
        {...props}
        animation={defineAnimation()}
        animationDuration={props.animationDuration || getDuration()}
        animationIterationCount={
          props.animationIterationCount || getInterationCount()
        }
        animationTimingFunction={
          props.animationTimingFunction || getAnimationTimingFunction()
        }
      >
        {props.children}
      </Builder>
    );
  }
);
