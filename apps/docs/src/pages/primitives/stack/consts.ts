import { Checkbox } from "@/features/documentation/component/Checkboxes";

export type Type = "flex-start" | "flex-end" | "center" | "baseline";

export const alignCheckboxesArr: Checkbox<Type>[] = [
  {
    name: "flex-start",
    label: "flex-start",
    checked: true,
    value: "flex-start",
  },
  {
    name: "center",
    label: "center",
    checked: false,
    value: "center",
  },
  {
    name: "flex-end",
    label: "flex-end",
    checked: false,
    value: "flex-end",
  },
  {
    name: "baseline",
    label: "baseline",
    checked: false,
    value: "baseline",
  },
];
