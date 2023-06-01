import { PropsType } from "@/features/docs/components/Prop"

import { flexDirection, flexWrap } from "@/styles/vars/display"
import { spacing } from "@/styles/vars/spacing"

export const props: PropsType = {
  link: {
    href: `/primitives/box`,
    name: "Has everything box has",
  },
  props: [
    {
      name: "gap",
      values: Object.keys(spacing).map((g) => g),
    },
    {
      name: "flexDirection",
      values: Object.keys(flexDirection).map((g) => g),
    },
    {
      name: "flexWrap",
      values: Object.keys(flexWrap).map((g) => g),
    },
  ],
}
