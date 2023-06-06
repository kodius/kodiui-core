import React, { FC, ReactNode } from "react"
import { Sidebar } from "@/features/sidebar/components"

import { Sidebar as KodiSidebar } from "@/components/primitives/sidebar"

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <KodiSidebar gap="0">
      <Sidebar />
      {children}
    </KodiSidebar>
  )
}

export default Layout
