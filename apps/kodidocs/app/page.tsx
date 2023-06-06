import React from "react"

import { Stack } from "@/components/primitives/stack"
import { Heading } from "@/components/typography/heading"
import { Text } from "@/components/typography/text"
import { Actions } from "@/app/welcome/(components)/header/actions"

export default function Home() {
  return (
    <section>
      <Stack gap="5xl">
        {/* header */}

        <Stack
          gap="5xl"
          justify="center"
          items="center"
          className="bg-black text-center py-20"
        >
          <Heading level="1" className="font-extrabold">
            {/* The React Framework for the Web */}
            Unleash Web Creativity with
            <span className="text-[#493dcc]"> KODIUI</span>
          </Heading>
          <Text size="lg" className="w-[80%] text-[#888888]">
            The ultimate toolkit for{" "}
            <strong className="text-white"> React and Svelte </strong>{" "}
            developers. Streamline your UI development with a simple, modular,
            and accessible component library. Build remarkable web applications
            with ease using KODIUI&apos;s versatile building blocks.
          </Text>
          <Actions />
        </Stack>

        {/* footer */}
      </Stack>
    </section>
  )
}
