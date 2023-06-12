import React from "react"

import { Menu } from "./menu"
import { ToggleButton } from "./toggleButton"

export const Sidebar = () => {
  return (
    <ToggleButton>
      <Menu />
    </ToggleButton>
  )
}
