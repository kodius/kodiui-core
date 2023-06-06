import React from "react"

import { FlexBox } from "@/components/primitives/flex-box"

import { Footer } from "./footer"
import { Header } from "./header"

export const Sidebar = () => {
  return (
    <FlexBox
      justify="between"
      flexDirection="col"
      className="w-72 border-r h-screen"
    >
      <Header />
      <Footer />
    </FlexBox>
  )
}
