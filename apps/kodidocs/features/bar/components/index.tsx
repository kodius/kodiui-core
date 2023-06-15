import React from "react"
import Link from "next/link"
import { SearchDocumentation } from "@/features/search/components"

import { Box } from "@/components/primitives/box/box"
import { Split } from "@/components/primitives/split"
import { Text } from "@/components/typography/text"

export const Bar = () => {
  return (
    <Box p="xs" className="border-b px-sm">
      <Split items="center">
        <Logo />
        <SearchDocumentation />
      </Split>
    </Box>
  )
}

const Logo = () => {
  return (
    <Link href={"/"}>
      <Text weight="bold">kodidocs</Text>
    </Link>
  )
}
