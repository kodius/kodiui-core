import { Category } from "../types"

export const categories: Category[] = [
  {
    name: "Primitives",
    elements: [
      {
        name: "Stack",
        description:
          "Stack is a container component for arranging elements vertically",
      },
      {
        name: "Center",

        description: "Layout component that centers its child within itself.",
      },
      {
        name: "Cluster",

        description:
          "The Cluster component is a versatile UI element that intelligently organizes and presents a group of related items within a user interface. It inherits all props from the Box component, allowing for seamless customization and integration with existing design systems.",
      },
      {
        name: "Split",
        description:
          "The Split component is a flexible UI element that effectively separates and displays content into two distinct sections within a user interface. It inherits all props from the Box component, enabling easy customization and seamless integration with your design system.",
      },
      {
        name: "Sidebar",

        description:
          "The Sidebar layout allows for a responsive design where two adjacent elements can appear side-by-side or stacked vertically, with the sidebar element maintaining a fixed width and the other element taking up the remaining space. It provides a seamless and flexible layout for various content arrangements within a parent container.",
      },
      {
        name: "Switcher",
        description:
          "The Switcher element adapts its layout to a vertical configuration when the parent element's width is insufficient, ensuring optimal usability and visual presentation across different screen sizes.",
      },
      {
        name: "FlexBox",

        description:
          "Flex is Box with display set to flex and comes with helpful style shorthand. It renders a `div` element.",
      },
      {
        name: "Box",

        description:
          "Box is the most abstract component on top of which all other components are built. By default, it renders a `div` element",
      },
    ],
  },
  {
    name: "Typography",
    elements: [
      {
        name: "Heading",
        progress: "dev",
        description:
          "The Heading component is a powerful UI element that allows for displaying and styling headings within a user interface. It offers options for organizing content hierarchically, adjusting text alignment, changing heading colors, and applying custom styles.",
      },
      {
        name: "Text",
        progress: "dev",
        description:
          "The Text component is a versatile UI element that allows for displaying and styling text within a user interface. It offers various options for customizing the font size, alignment, and color, providing flexibility and consistency for typography.",
      },
    ],
  },
  {
    name: "Components",
    elements: [
      {
        name: "Components",
        progress: "dev",
        description:
          "Explore our versatile UI elements for enhanced interfaces. Click for more on other components.",
      },
    ],
  },
]
