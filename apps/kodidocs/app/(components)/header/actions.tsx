"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { copyText } from "@/features/docs/helpers/copyText"
import { CheckIcon, Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Center } from "@/components/primitives/center"
import { FlexBox } from "@/components/primitives/flex-box"
import { Stack } from "@/components/primitives/stack"
import { Text } from "@/components/typography/text"

export const Actions = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("quickView")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => {
        setIsCopied(false)
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [isCopied])

  const handleCopy = (text: string) => {
    copyText(text)
    setIsCopied(true)
  }

  return (
    <Center direction="horizontal">
      <Stack gap="sm">
        <FlexBox flexDirection="row" items="center" gap="md" p="0">
          <Button asChild>
            <Link href="/docs/primitives/stack">Get Started</Link>
          </Button>
          <Button variant="outline" onClick={scrollToAbout}>
            Quick view
          </Button>
        </FlexBox>

        <FlexBox
          flexDirection="row"
          items="center"
          gap="sm"
          p="0"
          className="group"
          justify="center"
          onClick={() => handleCopy("npx @kodiui/cli@latest")}
        >
          <Text
            size="sm"
            className="cursor-copy tracking-wide text-muted-foreground"
          >
            ~ npx @kodiui/cli@latest
          </Text>
          {isCopied ? (
            <CheckIcon className=" transition-all duration-200 w-3" />
          ) : (
            <Copy className="opacity-0 group-hover:opacity-100 transition-all duration-200 w-3" />
          )}
        </FlexBox>
      </Stack>
    </Center>
  )
}
