import { PropsType } from "@/features/docs/components/Prop"
import { width } from "tailwindcss-classnames"

import { spacing } from "@/styles/tokens/spacing"

export const props: PropsType = {
  props: [
    {
      name: "direction",
      values: ["vertical", "hotizontal", "center"],
      defaultValue: "hotizontal",
    },
    {
      name: "gap",
      defaultValue: "sm",
      values: Object.keys(spacing).map((g) => g),
    },
    {
      name: "Pading",
      defaultValue: "sm",
      values: Object.keys(spacing).map((g) => g),
    },
    {
      name: "NoBar",
      defaultValue: "true",
      description: "hide scrollbar",
      values: ["true", "false"],
    },
  ],
}
