import React from "react"
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
  return <Text weight="bold">kodidocs</Text>
}
