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
      }, {
        id: 2,
        name: "TextLink",
        href: routes.textLink,
      },
    ],
  },
];
