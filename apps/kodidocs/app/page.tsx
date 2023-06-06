import React from "react"
import Link from "next/link"
import { copyText } from "@/features/docs/helpers/copyText"
import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Center } from "@/components/primitives/center"
import { Stack } from "@/components/primitives/stack"
import { Heading } from "@/components/typography/heading"
import { Text } from "@/components/typography/text"

export default async function Home() {
  return (
    <section>
      {/* <Center direction="center" className="h-screen">
        <Stack gap="xl">
          <Heading textAlign="center" level="1">
            KodiUI
          </Heading>
          <Button>
            <Link href="primitives/stack">Get started</Link>
          </Button>

          <Text className="group cursor-copy ">
            ~ npx create-next-app@latest
            <Copy 
              className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duratipn-300 "
              size={16}
            ></Copy>
          </Text>
        </Stack>
      </Center> */}

      <Stack gap="5xl">
        {/* header */}

        {/* footer */}
      </Stack>
    </section>
  )
}
