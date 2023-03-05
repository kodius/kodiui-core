import { BoxShadows } from "./box-shadows.css";
import { BorderRadius } from "./border-radius.css";
import { Space } from "./space.css";
import { Colors } from "./colors.css";

import { defFont, defFontSize, defBreakpoints } from "./defaults.css";
import { BorderWidth } from "./border-width.css";
import { BreakPoints } from "./break-points";

export const defContract = {
  font: defFont,
  fontSize: defFontSize,
  //  ---
  borderWidth: BorderWidth ,
  breakpoints: BreakPoints,
  borderRadius: BorderRadius,
  colors: Colors,
  boxShadow: BoxShadows,
  space: Space,
};
