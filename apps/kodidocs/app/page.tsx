import React from "react"

import { Center } from "@/components/primitives/center"
import { Stack } from "@/components/primitives/stack"
import { Heading } from "@/components/typography/heading"
import { Text } from "@/components/typography/text"
import PrimitivesList from "@/app/welcome/(components)/footer/PrimitivesList"
import { Actions } from "@/app/welcome/(components)/header/actions"

export default function Home() {
  return (
    <section>
      <Stack gap="5xl">
        <Stack gap="5xl" className="text-center py-20">
          <Stack>
            <Heading level="1" weight="bold">
              Unleash Web Creativity with
            </Heading>
            <Heading weight="bold" level="1">
              KODIUI
            </Heading>
          </Stack>
          <Center>
            <Text size="lg" className="max-w-4xl text-muted-foreground">
              The ultimate toolkit for{" "}
              <strong className="text-white"> React and Svelte </strong>{" "}
              developers. Streamline your UI development with a simple, modular,
              and accessible component library. Build remarkable web
              applications with ease using KODIUI&apos;s versatile building
              blocks.
            </Text>
          </Center>
          <Actions />
        </Stack>
      </Stack>
      <PrimitivesList />
    </section>
  )
}
