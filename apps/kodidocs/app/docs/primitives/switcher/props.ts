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
      description:
        "The spacing between childrens can be adjusted using the gap prop.",
      defaultValue: "xs",
    },
  ],
}
