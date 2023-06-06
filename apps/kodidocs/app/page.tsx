import React from "react"

import { Box } from "@/components/primitives/box/box"
import { Center } from "@/components/primitives/center"
import { Cluster } from "@/components/primitives/cluster"
import { Sidebar } from "@/components/primitives/sidebar"
import { Split } from "@/components/primitives/split"
import { Stack } from "@/components/primitives/stack"
import { Switcher } from "@/components/primitives/switcher"

export default async function Home() {
  return (
    <section>
      <Box p={"lg"} className="lg:p-xl">
        hi2
      </Box>
      <Stack className="gap-[32px]">
        <div>elem</div>
        <div>elem</div>
      </Stack>
      <Cluster gap="3xl" className="align-center">
        <div>elem</div>
        <div>elem</div>
        <div>elem</div>
        <div>elem</div>
        <div>elem</div>
        <div>elem</div>
      </Cluster>
      <Switcher>
        <div>elem</div>
        <div>elem</div>
      </Switcher>
      <Center>
        <div>elem</div>
      </Center>
      <Sidebar>
        <div className="basis-96 bg-red-400">elem</div>
        <div className="bg-blue-400">elem</div>
      </Sidebar>
      <Split>
        <div className="bg-blue-400">elem</div>
        <div className="bg-blue-400">elem</div>
      </Split>
    </section>
  )
}
