import React from "react"

import { Box } from "@/components/primitives/box/box"
import { Center } from "@/components/primitives/center"
import { Cluster } from "@/components/primitives/cluster"
import { Sidebar } from "@/components/primitives/sidebar"
import { Stack } from "@/components/primitives/stack"
import { Switcher } from "@/components/primitives/switcher"
import { Heading, Text } from "@/components/typography"

export default async function Home() {
  return (
    <section>
      <Box padding="2xl" background="test1" color="red-100">
        box
      </Box>
      <Stack gap="5xl" background="red-700">
        <div>Element</div>
        <div>Element</div>
        <div>Element</div>
        <div>Element</div>
      </Stack>
      <Cluster background="teal-400">
        <div>Element</div>
        <div>Element</div>
        <div>Element</div>
        <div>Element</div>
      </Cluster>
      <Switcher background="green-400">
        <div>Element</div>
        <div>Element</div>
      </Switcher>
      <Sidebar side="right" gap="0">
        <div className="bg-indigo-300">Element</div>
        <div className="basis-96 bg-pink-300">Element</div>
      </Sidebar>
      <Heading level="1">Heading 1</Heading>
      <Heading level="2">Heading 2</Heading>
      <Heading level="3">Heading 3</Heading>
      <Heading level="4">Heading 4</Heading>
      <Text variant="lg">Text</Text>
      <Text variant="sm">Text</Text>
      <Text variant="lead">Text</Text>
      <Text variant="muted">Text</Text>
      <Text variant="blockQute">Text</Text>
      <Text variant="inlineCode">Text</Text>
      <Box className="h-96 bg-blue-800">
        <Center direction="center">
          <div>element</div>
          <div>element</div>
          <div>element</div>
        </Center>
      </Box>
      <Box background="green-500" color="green-900" padding="3xl" className="md:p-sm">
        responsive
      </Box>
    </section>
  )
}
