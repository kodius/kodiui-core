import { PropsType } from "@/features/docs/components/Prop"

export const props: PropsType = {
  props: [
    {
      name: "level",
      values: ["1", "2", "3", "4"],
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
