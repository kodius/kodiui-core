import { PropsType } from "@/features/docs/components/Prop"

import { spacing } from "@/styles/tokens/spacing"

export const props: PropsType = {
  // link: {
  //   href: `/primitives/box`,
  //   name: "Has everything box has",
  // },
  props: [
    {
      name: "gap",
      values: Object.keys(spacing).map((space) => space),
      defaultValue: "xs",
    },
    {
      name: "flexDirection",
      values: ["col", "row", "rowReverse", "colReverse"],
    },
    {
      name: "justify",
      values: [
        "center",
        "start",
        "end",
        "normal",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
    },
    {
      name: "items",
      values: ["center", "start", "end", "stretch", "baseline"],
    },
  ],
}
