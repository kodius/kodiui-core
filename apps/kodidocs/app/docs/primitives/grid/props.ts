import { PropsType } from "@/features/docs/components/Prop"

export const props: PropsType = {
  props: [
    {
      name: "minimum",
      values: ["i.e. 200px | 300px"],
    },
    {
      name: "columns",
      values: ["i.e. {{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, '2xl': 6 }}"],
    },
    {
      name: "gap | gapX | gapY",
      values: ["xss", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "5xl", "0"],
    },
    {
      name: "justifyContent | alignContent",
      values: [
        "normal",
        "center",
        "start",
        "end",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
    },
  ],
}
