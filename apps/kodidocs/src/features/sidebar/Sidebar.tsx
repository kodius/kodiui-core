import React from 'react'
import { FlexBox, Split } from '@kodiui/ui'
import Link from 'next/link'
import { Footer } from './components'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@cli-components/Accordion'
import { categories } from './data/categories'
import { Badge } from '@cli-components/Badge'
import { Progress } from '@types'

const getTone = (progress: Progress) => {
  switch (progress) {
    case 'new':
      return 'brand'
    case 'dev':
      return 'info'
    default:
      break
  }
}

export const Sidebar = async () => {
  return (
    <FlexBox
      flexDirection="column"
      justifyContent="space-between"
      minWidth="80"
      height="screen"
      py="sm"
      borderRightStyle="solid"
      borderRightWidth="md"
      borderColor="blackA4"
    >
      <Accordion type="single">
        {categories?.map((category) => {
          return (
            <AccordionItem key={category?.name} value={category?.name || ''}>
              <AccordionTrigger>{category?.name}</AccordionTrigger>
              {category?.elements?.map((Element) => {
                return (
                  <AccordionContent key={Element?.name}>
                    <Split>
                      <Link href={`${category.name.toLowerCase()}/${Element?.name.toLowerCase()}`}>
                        {Element?.name}
                      </Link>
                      <Badge tone={getTone(Element.progress)}>{Element.progress}</Badge>
                    </Split>
                  </AccordionContent>
                )
              })}
            </AccordionItem>
          )
        })}
      </Accordion>
      <Footer />
    </FlexBox>
  )
}
