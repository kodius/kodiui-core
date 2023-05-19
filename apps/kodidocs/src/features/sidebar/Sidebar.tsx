import React from 'react'
import { FlexBox } from '@kodiui/ui'
import Link from 'next/link'
import { graphQlClient } from '@lib'
import { GetCategoriesDocument } from '@gql/graphql'
import { Footer } from './components'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@cli-components/Accordion'
import { useToast } from '@cli-components/Toast'
import { Button } from '@cli-components/Button'

export const Sidebar = async () => {
  const { getCategories: categories } = await graphQlClient.request(GetCategoriesDocument)

  return (
    <FlexBox
      flexDirection="column"
      justifyContent="space-between"
      minWidth="80"
      background="gray1"
      height="screen"
      py="sm"
    >
      <Accordion type="single">
        {categories?.map((category) => {
          return (
            <AccordionItem key={category?.name} value={category?.name || ''}>
              <AccordionTrigger>{category?.name}</AccordionTrigger>
              {category?.elements?.map((Element) => {
                return (
                  <AccordionContent key={Element?.name}>
                    <Link href={Element?.id || ''}>{Element?.name}</Link>
                  </AccordionContent>
                )
              })}
              <AccordionContent>
                <Button variant="transparent">Create new Element</Button>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
      <Footer />
    </FlexBox>
  )
}
