import { Navigator } from "../types";

export const navigatorLinks: Navigator[] = [
  {
    id: 0,
    name: "Welcome",
    isParent: true,
    children: [
      { id: 0, name: "Child 1", children: [{ id: 0, name: "child 2" }] },
    ],
  },
];
