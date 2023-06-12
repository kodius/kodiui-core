import React from "react"

import { FlexBox } from "@/components/primitives/flex-box"

import { Footer } from "./footer"
import { Header } from "./header"

export const Menu = () => {
  return (
    <FlexBox
      justify="between"
      flexDirection="col"
      className="w-screen md:w-72 border-r h-screen fixed bg-black z-10 "
    >
      <Header />
      <Footer />
    </FlexBox>
  )
}
