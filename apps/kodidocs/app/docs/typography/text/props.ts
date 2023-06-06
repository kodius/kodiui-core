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

    // {
    //   name: "textAlign",
    //   values: Object.keys(textAlign).map((g) => g),
    // },
    // {
    //   name: "justifyContent",
    //   values: Object.keys(justifyContent).map((g) => g),
    // },
    // {
    //   name: "width, height, p, px, py, pb, pl, pr, pt, top, bottom, left, right",
    //   values: Object.keys(width).map((g) => g),
    // },
  ],
}
