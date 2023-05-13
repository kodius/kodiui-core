import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components'
import React from 'react'
import { navLinks } from './data/links'
import { Box } from '@kodiui/ui'
import Link from 'next/link'
console.log('server component Sidebar')

export const Sidebar = () => {
  return (
    <Box minWidth="80" background="gray1" height="screen">
      <Accordion type="single">
        {navLinks.map((nav) => {
          return (
            <AccordionItem value={nav.name}>
              <AccordionTrigger>{nav.name}</AccordionTrigger>
              {nav.items?.map((item) => {
                return (
                  <AccordionContent>
                    <Link href={item.href}>{item.name}</Link>
                  </AccordionContent>
                )
              })}
            </AccordionItem>
          )
        })}
      </Accordion>
    </Box>
  )
}
