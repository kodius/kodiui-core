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
        name: "Box",
        href: routes["new-project"],
      },
      {
        id: 1,
        name: "Stack",
        href: routes["new-project"],
      },
    ],
  },
];
