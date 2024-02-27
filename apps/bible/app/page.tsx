import { bibleContents } from "@/site/bible-contents";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      {bibleContents.map((bibleContent) => {
        return (
          <ul key={bibleContent.title}>
            <h1>{bibleContent.title}</h1>
            {bibleContent.children.map((childBible) => {
              return (
                <li key={childBible.title}>
                  <Link href={childBible.href}>{childBible.title}</Link>
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
}
