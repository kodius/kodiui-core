import { Stack } from "@/components/primitives/stack";
import { Text } from "@/components/typography/text";
import {
  BibleContent,
  BibleContentChild,
  bibleContents,
} from "@/site/bible-contents";
import Link from "next/link";
import { FC } from "react";

export default function Home() {
  return (
    <div className="p-4">
      {bibleContents.map((bibleContent) => (
        <BibleContent key={bibleContent.title} {...bibleContent} />
      ))}
    </div>
  );
}

const BibleContent: FC<BibleContent> = (content) => {
  const bibleChilds = content.children.map((bibleChild) => (
    <BibleChild key={bibleChild.title} {...bibleChild} />
  ));

  const title = <Text>{content.title}</Text>;

  return (
    <Stack>
      {title}
      {bibleChilds}
    </Stack>
  );
};

const BibleChild: FC<BibleContentChild> = (child) => (
  <Link href={child.href}>{child.title}</Link>
);
