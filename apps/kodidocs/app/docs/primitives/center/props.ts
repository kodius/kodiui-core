import { PropsType } from "@/features/docs/components/Prop"

export const props: PropsType = {
  link: {
    href: `/primitives/box`,
    name: "Has everything box has",
  },
  props: [
    {
      name: "direction",
      values: ["vertical", "hotizontal", "center"],
      defaultValue: "hotizontal",
    },
  ],
}
