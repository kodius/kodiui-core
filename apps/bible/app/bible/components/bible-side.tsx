import { Stack } from '@/components/primitives/stack'
import { Text } from '@/components/typography/text'
import { BibleContent, bibleContents } from '@/site/bible-contents'
import { FC, Suspense } from 'react'
import { BibleChild } from './bible-child'
import { UserCard } from '@/module/auth/components/user-card'

export const BibleSide = () => {
  return (
    <Stack gap="2xl" className="p-4">
      <Suspense fallback={<div>loading user card..</div>}>
        <UserCard />
      </Suspense>
      {bibleContents.map((bibleContent) => (
        <BibleContent key={bibleContent.title} {...bibleContent} />
      ))}
    </Stack>
  )
}

const BibleContent: FC<BibleContent> = (content) => {
  const bibleChilds = (
    <Stack gap="xs" className="pl-xs border-l-2">
      {content.children.map((bibleChild) => (
        <BibleChild key={bibleChild.title} {...bibleChild} />
      ))}
    </Stack>
  )

  const title = <Text>{content.title}</Text>

  return (
    <Stack gap="xs">
      {title}
      {bibleChilds}
    </Stack>
  )
}
