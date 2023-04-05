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
      {
        id: 3,
        name: "Stack",
        href: routes["new-project"],
      },
    ],
  },
  {
    id: 2,
    name: "components",
    isParent: true,
    children: [
      {
        id: 0,
        name: "Button",
        href: routes.button,
      },
    ],
  },
];
