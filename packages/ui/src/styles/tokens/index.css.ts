import { BoxShadows } from "./box-shadows.css";
import { BorderRadius } from "./border-radius.css";
import { Space } from "./space.css";

import { BorderWidth } from "./border-width.css";
import { BreakPoints } from "./break-points";
import { Animations, AnimationTimingFunction } from "./animations";
import { Colors } from "./colors/index.css";
import { Width } from "./width.css";

export const tokens = {
  borderWidth: BorderWidth,
  breakpoints: BreakPoints,
  borderRadius: BorderRadius,
  colors: Colors,
  boxShadow: BoxShadows,
  space: Space,
  animations: Animations,
  animationTimingFunction: AnimationTimingFunction,
  width: Width,
};

export type TokenKeys = keyof typeof tokens;

export type Tokens = typeof tokens;
