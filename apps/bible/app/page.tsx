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
    <Stack gap="2xl" className="p-4">
      {bibleContents.map((bibleContent) => (
        <BibleContent key={bibleContent.title} {...bibleContent} />
      ))}
    </Stack>
  );
}

const BibleContent: FC<BibleContent> = (content) => {
  const bibleChilds = (
    <Stack gap="xs" className="pl-xs border-l-2">
      {content.children.map((bibleChild) => (
        <BibleChild key={bibleChild.title} {...bibleChild} />
      ))}
    </Stack>
  );

  const title = <Text tone="muted">{content.title}</Text>;

  return (
    <Stack gap="xs">
      {title}
      {bibleChilds}
    </Stack>
  );
};

const BibleChild: FC<BibleContentChild> = (child) => {
  const title = child.href ? (
    <Link href={child.href}> {child.title}</Link>
  ) : (
    <Text>{child.title}</Text>
  );

  const notes = child.notes && (
    <Stack className="border-l-2 py-xxs" gap="xs">
      {child.notes.map((note) => (
        <Text key={note} tone="muted" className="pl-xs">
          {note}
        </Text>
      ))}
    </Stack>
  );

  return (
    <Stack gap="xxs">
      {title}
      {notes}
    </Stack>
  );
};
