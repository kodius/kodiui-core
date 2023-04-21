import { routes } from "@/routes";
import { Navigator } from "../types";

export const navigatorLinks: Navigator[] = [
  {
    id: 0,
    name: "Guides",
    isParent: true,
    children: [
      {
        id: 0,
        name: "New Project",
        href: routes["new-project"],
      },
      {
        id: 1,
        name: "Dependecies",
        href: routes["new-project"],
      },
    ],
  },
  {
    id: 1,
    name: "ui",
    isParent: true,
    children: [
      {
        id: 0,
        name: "Install",
        href: routes.installKodiui,
      },
      {
        id: 1,
        name: "Multiple themes",
        href: routes.multipleThemes,
      },
      {
        id: 2,
        name: "Box",
        href: routes.box,
      },
    ],
  },
  {
    id: 2,
    name: "primitives",
    isParent: true,
    children: [
      {
        id: 0,
        name: "Stack",
        href: routes.stack,
      },
      {
        id: 1,
        name: "Center",
        href: routes.center,
      },
      {
        id: 2,
        name: "Cluster",
        href: routes.cluster,
      },
      {
        id: 3,
        name: "Split",
        href: routes.split,
      },
      {
        id: 4,
        name: "Icon",
        href: routes.icon,
      },
      {
        id: 5,
        name: "Imposter",
        href: routes.imposter,
      },
      {
        id: 6,
        name: "Sidebar",
        href: routes.sidebar,
      },
      {
        id: 7,
        name: "Switcher",
        href: routes.switcher,
      },
      {
        id: 8,
        name: "FlexBox",
        href: routes.flexBox,
      },
    ],
  },
  {
    id: 3,
    name: "components",
    isParent: true,
    children: [
      {
        id: 0,
        name: "Button",
        href: routes.button,
      },
      {
        id: 1,
        name: "Drawer",
        href: routes.drawer,
      },
      {
        id: 2,
        name: "Input",
        href: routes.input,
      },
      {
        id: 3,
        name: "ButtonLink",
        href: routes.buttonLink,
      },
    ],
  },
  {
    id: 4,
    name: "typography",
    isParent: true,
    children: [
      {
        id: 0,
        name: "Headings",
        href: routes.headings,
      },
      {
        id: 1,
        name: "Text",
        href: routes.text,
      },
      {
        id: 2,
        name: "TextLink",
        href: routes.textLink,
      },
    ],
  },
];
