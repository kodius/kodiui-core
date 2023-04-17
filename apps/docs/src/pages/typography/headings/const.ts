import { Checkbox } from "@/features/documentation/component/Checkboxes";

export type Type = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export const levels: Checkbox<Type>[] = [
  {
    name: "h1",
    label: "h1",
    checked: true,
    value: "h1",
  },
  {
    name: "h2",
    label: "h2",
    checked: false,
    value: "h2",
  },
  {
    name: "h3",
    label: "h3",
    checked: false,
    value: "h3",
  },
  {
    name: "h4",
    label: "h4",
    checked: false,
    value: "h4",
  },
  {
    name: "h5",
    label: "h5",
    checked: false,
    value: "h5",
  },
  {
    name: "h6",
    label: "h6",
    checked: false,
    value: "h6",
  },
];

export const headingCodeSnippet = `<Heading level="h1">Heading</Heading>`;
