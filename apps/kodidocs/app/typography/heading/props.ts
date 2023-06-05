import { PropsType } from "@/features/docs/components/Prop"

// import { justifyContent } from "@/styles/vars/display"
// import { textAlign } from "@/styles/vars/text"
// import { width } from "@/styles/vars/width"

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

    // {
    //   name: "textAlign",
    //   values: Object.keys(textAlign).map((g) => g),
    // },
    // {
    //   name: "justifyContent",
    //   values: Object.keys(justifyContent).map((g) => g),
    // },
  ],
}
