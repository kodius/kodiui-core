import { PropsType } from "@/features/docs/components/Prop"

import { spacing } from "@/styles/tokens/spacing"

export const props: PropsType = {
  props: [
    {
      name: "padding",
      values: Object.keys(spacing).map((g) => g),
    },
    {
      name: "gap",
      values: Object.keys(spacing).map((g) => g),
    },
    {
      name: "flexDirection",
      values: ["row", "rowReverse", "col", "colReverse"],
    },
    {
      name: "wrap",
      values: ["true", "wrap", "wrapReverse", "nowrap"],
    },
    {
      name: "justify",
      values: [
        "normal",
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
    },
    {
      name: "items",
      values: ["start", "end", "center", "baseline", "stretch"],
    },
  ],
}
