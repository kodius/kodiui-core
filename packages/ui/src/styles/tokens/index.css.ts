import { BoxShadows } from "./box-shadows.css";
import { BorderRadius } from "./border-radius.css";
import { Space } from "./space.css";

import { BorderWidth } from "./border-width.css";
import { BreakPoints } from "./break-points";
import { Animations, AnimationTimingFunction } from "./animations";
import { LightColors } from "./colors/light-colors.css";

export const tokens = {
  borderWidth: BorderWidth,
  breakpoints: BreakPoints,
  borderRadius: BorderRadius,
  colors: LightColors,
  boxShadow: BoxShadows,
  space: Space,
  animations: Animations,
  animationTimingFunction: AnimationTimingFunction,
};

export type TokenKeys = keyof typeof tokens;

export type Tokens = typeof tokens;
