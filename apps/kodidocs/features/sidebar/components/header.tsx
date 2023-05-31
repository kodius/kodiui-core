import React from "react"
import Link from "next/link"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Box } from "@/components/primitives/box/box"
import { Center } from "@/components/primitives/center"
import { Split } from "@/components/primitives/split"
import { Stack } from "@/components/primitives/stack"
import { Heading } from "@/components/typography/heading"

import { categories } from "../data/categories"

export const Header = () => {
  return (
    <Stack>
      <Box py="5xl">
        <Center>
          <Heading level="4">kodidocs</Heading>
        </Center>
      </Box>
      <Accordion type="single">
        {categories?.map((category) => {
          return (
            <AccordionItem
              className="px-sm"
              key={category?.name}
              value={category?.name || ""}
            >
              <AccordionTrigger>{category?.name}</AccordionTrigger>
              {category?.elements?.map((Element) => {
                const isBlock = Element.progress === "block"
                return (
                  <AccordionContent key={Element?.name}>
                    {isBlock && (
                      <Split className="opacity-40 cursor-not-allowed">
                        {Element?.name}
                        <Badge>todo</Badge>
                      </Split>
                    )}
                    {!isBlock && (
                      <div>
                        <Link
                          href={`${category.name.toLowerCase()}/${Element?.name.toLowerCase()}`}
                        >
                          <Split>
                            {Element?.name}
                            <Badge>{Element.progress}</Badge>
                          </Split>
                        </Link>
                      </div>
                    )}
                  </AccordionContent>
                )
              })}
            </AccordionItem>
          )
        })}
      </Accordion>
    </Stack>
  )
}
