export type BibleContent = {
  title: string;
  children: BibleContentChild[];
};

export type BibleContentChild = Omit<BibleContent, "children"> & {
  href: string | null;
  status: "done" | "todo" | "re-opened";
  notes?: string[];
};

export const bibleContents: BibleContent[] = [
  {
    title: "Setup",
    children: [
      {
        title: "eslint",
        href: null,
        status: "todo",
        notes: ["Airbnb?", "Custom?"],
      },
      {
        title: "prettier",
        href: null,
        status: "todo",
        notes: ["Shadcn?"],
      },
    ],
  },
  {
    title: "UI",
    children: [
      {
        title: "Card components",
        href: null,
        status: "todo",
        notes: ["How to"],
      },
    ],
  },
  {
    title: "Project",
    children: [
      {
        title: "Folder structure",
        href: null,
        status: "todo",
        notes: ["features based", "(components)?", "mix"],
      },
      {
        title: "Barrel exports",
        href: null,
        status: "todo",
        notes: ["how to?"],
      },
    ],
  },
  {
    title: "Rules",
    children: [
      {
        title: "TypeScript",
        href: null,
        status: "todo",
        notes: ['no any', 'strict-typing, try to handle every use case'],
      },
      {
        title: "component library",
        href: null,
        status: "todo",
        notes: ["shadcn"],
      },
    ],
  },
];
