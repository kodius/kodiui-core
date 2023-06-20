import { PropsType } from "@/features/docs/components/Prop"

export const props: PropsType = {
  props: [
    {
      name: "size",
      values: ["xs", "sm", "base", "lg"],
    },
    {
      name: "color",
      values: ["All tailwind colors + cust colors", "brand"],
    },
    {
      name: "weight",
      values: ["base", "bold"],
    },

    {
      name: "textAlign",
      values: ["center", "end", "right", "start", "left", "justify"],
    },
  ],
}
