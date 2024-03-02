'use client'

import { cn } from '@/lib/utils'
import { BibleContentChild } from '@/site/bible-contents'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

export const BibleChild: FC<BibleContentChild> = (child) => {
  const segment = usePathname()
  const isActive = segment?.includes(child.href)
  return (
    <Link href={child.href} className={cn('text-muted-foreground', isActive && 'text-primary')}>
      {child.title}
    </Link>
  )
}
