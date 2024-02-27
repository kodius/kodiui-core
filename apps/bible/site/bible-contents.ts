export type BibleContent = {
  title: string;
  children: BibleContentChild[];
};

export type BibleContentChild = Omit<BibleContent, "children"> & {
  href: string;
};

export const bibleContents: BibleContent[] = [
  { title: "Test", children: [{ title: "Test child", href: "/" }] },
];
