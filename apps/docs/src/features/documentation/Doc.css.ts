import { vars } from "@kodiui/ui";
import { style } from "@vanilla-extract/css";

export const placeholder = style({
  backgroundColor: vars.colors.gray3,
  opacity: "0.45",
  background:
    "linear-gradient(45deg, #bbbbbb 20%, transparent 20%, transparent 80%, #bbbbbb  80%, #bbbbbb 100%), linear-gradient(135deg, #bbbbbb 20%, transparent 20%, transparent 80%, #bbbbbb  80%, #bbbbbb 100%);",
  backgroundSize: "2em 2em",
});
