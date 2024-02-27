export type BibleContent = {
  title: string;
  children: BibleContentChild[];
};

export type BibleContentChild = Omit<BibleContent, "children"> & {
  href: string;
};

export const bibleContents: BibleContent[] = [
  { title: "Test", children: [{ title: "Test child", href: "/" }] },
  {
    title: "Test 2",
    children: [
      { title: "Test child 2", href: "/" },
      { title: "Test child 3", href: "/" },
    ],
  },
];
