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
    const aboutSection = document.getElementById("about")
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
      <Stack gap="lg">
        <FlexBox flexDirection="row" justifyItems="center" gap="md">
          <Button
            asChild
            className="hover:bg-[#493dcc] py-2 hover:text-white  hover:no-underline transition-all duration-300"
          >
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button
            variant="outline"
            onClick={scrollToAbout}
            className="text-[#888888] hover:bg-transparent hover:border-[#493dcc] hover:border-solid hover:border-2 transition-all duration-300"
          >
            About KodiUI
          </Button>
        </FlexBox>

        <FlexBox
          flexDirection="row"
          placeItems="center"
          gap="sm"
          className="group"
          justify="center"
          onClick={() => handleCopy("npx @kodiui/cli@latest")}
        >
          <Text size="sm" className="cursor-copy tracking-wide text-[#888888]">
            ~ npx @kodiui/cli@latest
          </Text>
          {isCopied ? (
            <CheckIcon
              className=" transition-all duration-200"
              size={12}
            ></CheckIcon>
          ) : (
            <Copy
              className="opacity-0 group-hover:opacity-100 transition-all duration-200"
              size={12}
            ></Copy>
          )}
        </FlexBox>
      </Stack>
    </Center>
  )
}
