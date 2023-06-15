import React from "react"

import { FlexBox } from "@/components/primitives/flex-box"

import { Footer } from "./footer"
import { Header } from "./header"

export const Menu = () => {
  return (
    <FlexBox
      p="0"
      justify="between"
      flexDirection="col"
      className="w-screen md:w-72 border-r h-screen"
    >
      <Header />
      <Footer />
    </FlexBox>
  )
}
