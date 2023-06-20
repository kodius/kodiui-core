import { PropsType } from "@/features/docs/components/Prop"

import { spacing } from "@/styles/tokens/spacing"

export const props: PropsType = {
  props: [
    {
      name: "p",
      values: Object.keys(spacing).map((g) => g),
    },
  ],
}
