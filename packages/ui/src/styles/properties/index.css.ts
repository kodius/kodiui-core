import { BoxShadows } from "./box-shadows.css";
import { BorderRadius } from "./border-radius.css";
import { Space } from "./space.css";

import { BorderWidth } from "./border-width.css";
import { BreakPoints } from "./break-points";
import { Animations, AnimationTimingFunction } from "./animations";
import { Colors } from "./colors/index.css";

export const properties = {
  borderWidth: BorderWidth,
  breakpoints: BreakPoints,
  borderRadius: BorderRadius,
  colors: Colors,
  boxShadow: BoxShadows,
  space: Space,
  animations: Animations,
  animationTimingFunction: AnimationTimingFunction,
};

export type PropertyKeys = keyof typeof properties
