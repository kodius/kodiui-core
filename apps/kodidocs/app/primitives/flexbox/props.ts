import { PropsType } from "@/features/docs/components/Prop"

import { spacing } from "@/styles/vars/spacing"

export const props: PropsType = {
  link: {
    href: "https://www.radix-ui.com/docs/primitives/components/context-menu#root",
    name: "Radix",
  },
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
