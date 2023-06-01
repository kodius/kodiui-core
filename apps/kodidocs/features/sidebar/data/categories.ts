import { Category } from "../types"

export const categories: Category[] = [
  {
    name: "Primitives",
    elements: [
      { name: "Stack", progress: "new" },
      { name: "Center", progress: "new" },
      { name: "Cluster", progress: "new" },
      { name: "Split", progress: "new" },
      { name: "Sidebar", progress: "new" },
      { name: "Switcher", progress: "new" },
      { name: "FlexBox", progress: "new" },
      { name: "Box", progress: "new" },
    ],
  },
  {
    name: "Components",
    elements: [
      { name: "Button", progress: "dev" },
      { name: "Drawer", progress: "dev" },
      { name: "Input", progress: "dev" },
      { name: "ButtonLink", progress: "dev" },
      { name: "TextDropdown", progress: "block" },
      { name: "Divider", progress: "block" },
      { name: "Switch", progress: "block" },
      { name: "Tabs", progress: "block" },
      { name: "Badge", progress: "block" },
      { name: "Accordion", progress: "block" },
      { name: "Checkbox", progress: "block" },
      { name: "Tooltip", progress: "block" },
      { name: "Slider", progress: "block" },
      { name: "ProgressBar", progress: "block" },
      { name: "Toast", progress: "block" },
      { name: "Label", progress: "block" },
      { name: "Avatar", progress: "block" },
    ],
  },
  {
    name: "Typography",
    elements: [
      { name: "Heading", progress: "dev" },
      { name: "Text", progress: "dev" },
      { name: "TextLink", progress: "dev" },
    ],
  },
]
