import { BoxShadows } from "./box-shadows.css";
import { BorderRadius } from "./border-radius.css";
import { Space } from "./space.css";

import { BorderWidth } from "./border-width.css";
import { Animations, AnimationTimingFunction } from "./animations";
import { LightColors } from "./colors/light-colors.css";
import { FontSize } from "./font-size.css";
import { BreakPoints } from "./break-points.css";
import { LightBackgroundColors } from "./colors/index.css";

export const tokens = {
  borderWidth: BorderWidth,
  breakpoints: BreakPoints,
  borderRadius: BorderRadius,
  colors: LightColors,
  backgroundColor: LightBackgroundColors, 
  boxShadow: BoxShadows,
  space: Space,
  fontSize: FontSize,
  animations: Animations,
  animationTimingFunction: AnimationTimingFunction,
};

export type TokenKeys = keyof typeof tokens;

export type Tokens = typeof tokens;
