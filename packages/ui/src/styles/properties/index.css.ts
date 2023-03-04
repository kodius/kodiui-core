import { BoxShadows } from "./box-shadows.css";
import { BorderRadius } from "./border-radius.css";
import { Space } from "./space.css";
import { Colors } from "./colors.css";

import {
  defFont,
  defRadii,
  defBoxShadow,
  defFontSize,
  defSpace,
  defBreakpoints,
} from "./defaults.css";

export const defContract = {
  font: defFont,
  fontSize: defFontSize,
  borderRadius: BorderRadius,
  breakpoints: defBreakpoints,
  //  ---
  colors: Colors,
  boxShadow: BoxShadows,
  space: Space,
};
