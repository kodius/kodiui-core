import { BoxShadows } from "./box-shadows.css";
import { BorderRadius } from "./border-radius.css";
import { Space } from "./space.css";
import { Colors } from "./colors.css";

import { defFont, defFontSize } from "./defaults.css";
import { BorderWidth } from "./border-width.css";
import { BreakPoints } from "./break-points";
import { Animations } from "./animations.css";
import { TransitionTimingFunction } from "./transitionTimingFunction.css";

export const defContract = {
  font: defFont,
  fontSize: defFontSize,
  //  ---
  borderWidth: BorderWidth,
  breakpoints: BreakPoints,
  borderRadius: BorderRadius,
  colors: Colors,
  boxShadow: BoxShadows,
  space: Space,
  animations: Animations,
  trnasitionTimingFunction: TransitionTimingFunction,
};
