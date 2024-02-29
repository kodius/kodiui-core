import { Route } from "next";
import { routes } from "./routes";

export type BibleContent = {
  title: string;
  children: BibleContentChild[];
};

export type BibleContentChild = Omit<BibleContent, "children"> & {
  href: Route | null;
  status: "done" | "todo" | "re-opened";
  notes?: string[];
};

export const bibleContents: BibleContent[] = [
  {
    title: "Data fetching",
    children: [
      {
        title: "Parrallel and Sequential data fetching",
        href: routes.bible.dataFetching.parrallelAndSequential.index,
        status: "todo",
      },
    ],
  },
];
