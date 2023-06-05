import React from "react"

import { FlexBox } from "@/components/primitives/flex-box"

import { Footer } from "./footer"
import { Header } from "./header"

export const Sidebar = () => {
  return (
    <FlexBox
      h="screen"
      justify="between"
      flexDirection="col"
      className="w-72 border-r"
    >
      <Header />
      <Footer />
    </FlexBox>
  )
}
