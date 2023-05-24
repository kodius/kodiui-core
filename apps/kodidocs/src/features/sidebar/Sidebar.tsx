import React from 'react'
import { FlexBox } from '@kodiui/ui'
import Link from 'next/link'
import { routes } from '@lib'
import { Footer } from './components'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@cli-components/Accordion'
import { CreateNewElement } from './components/Footer/CreateNewElement'
import { getServerSession } from 'next-auth'
import { Text } from '@cli-components/Text'
import { categories } from './data/categories'

export const Sidebar = async () => {
  const session = await getServerSession()

  const ifHaveUser = session?.user

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
      <Text>{session?.user?.email}</Text>
      <Accordion type="single">
        {categories?.map((category) => {
          return (
            <AccordionItem key={category?.name} value={category?.name || ''}>
              <AccordionTrigger>{category?.name}</AccordionTrigger>
              {category?.elements?.map((Element) => {
                return (
                  <AccordionContent key={Element?.name}>
                    <Link href={`${routes.components}/${Element?.id}`}>{Element?.name}</Link>
                  </AccordionContent>
                )
              })}
              {category && ifHaveUser && (
                <AccordionContent>
                  <CreateNewElement {...category} />
                </AccordionContent>
              )}
            </AccordionItem>
          )
        })}
      </Accordion>
      <Footer />
    </FlexBox>
  )
}
