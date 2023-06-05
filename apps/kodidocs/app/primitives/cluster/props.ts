import { PropsType } from "@/features/docs/components/Prop"

import { routes } from "@/config/site"

// import { spacing } from "@/styles/vars/spacing"

export const props: PropsType = {
  link: {
    href: `/primitives/box`,
    name: "Has everything box has",
  },
  props: [
    {
      name: "gap",
      // values: Object.keys(spacing).map((space) => space),
      values: [],
      defaultValue: "xs",
    },
  ],
}
