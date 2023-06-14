import React from "react"
import Link from "next/link"
import { SearchDocumentation } from "@/features/search/components"

import { routes } from "@/config/site"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Center } from "@/components/primitives/center"
import { Split } from "@/components/primitives/split"
import { Stack } from "@/components/primitives/stack"
import { Heading } from "@/components/typography/heading"

import { categories } from "../data/categories"

export const Header = () => {
  return (
    <Stack>
      <div className="py-5xl">
        <Center>
          <Link href={routes.welcome}>
            <Heading level="4">kodidocs</Heading>
          </Link>
        </Center>
      </div>
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
                const href =
                  Element.href ||
                  `${
                    routes.docs
                  }/${category.name.toLowerCase()}/${Element?.name.toLowerCase()}`
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
                        <Link href={href}>
                          <Split>
                            {Element?.name}
                            {Element.progress && (
                              <Badge>{Element.progress}</Badge>
                            )}
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

      <Link
        className="px-4"
        href="https://ui.shadcn.com/docs/components/accordion"
        target="_blank"
      >
        Components
      </Link>
      <div className="p-2">
        <SearchDocumentation />
      </div>
    </Stack>
  )
}
