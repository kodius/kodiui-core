import { forwardRef, PropsWithChildren, useState } from "react";
import { AnimationPlayStateType } from "../../../styles/properties/animations";
import { Sprinkles } from "../../../styles/sprinkles.css";
import { BuilderInterface } from "../../../types";
import { AnimationPropertiesKeys } from "../../../types/AnimationProperties";
import { Builder } from "../../Builder";
import { animationSetter } from "./animationSetter";

interface CustomAnimationArguments {
  shouldAnimate?: boolean;
}

export interface AnimationProps extends BuilderInterface {
  shouldAnimate?: boolean;
  animateOnHover?: boolean;
}

// export type AnimationProps = PropsWithChildren<
//   Pick<Sprinkles, AnimationPropertiesKeys>
// > &
//   CustomAnimationArguments;

export const Animation = forwardRef<HTMLElement, AnimationProps>(
  (props, ref) => {
    // const [animateOnHover, setAnimateOnHover] = useState(false);
    // let animateOnHover: boolean = false;

    const {
      getDuration,
      getInterationCount,
      getAnimationTimingFunction,
      defineAnimation,
    } = animationSetter(props);

    const definePlayState = (): AnimationPlayStateType => {
      if (props.animateOnHover) {
        // if (animateOnHover) return "forwards";
        // else return "none";
      }
      return "none";
    };

    return (
      <Builder
        ref={ref}
        onMouseEnter={() => {
          if (props.animateOnHover) {
            // setAnimateOnHover(true);
            // animateOnHover = true;
          }
        }}
        onMouseLeave={() => {
          if (props.animateOnHover) {
            // setAnimateOnHover(false);
            // animateOnHover = false;
          }
        }}
        {...props}
        animation={defineAnimation()}
        animationPlayState={definePlayState()}
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
