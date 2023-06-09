import React, { FC, ReactNode } from "react"
import { Sidebar } from "@/features/sidebar/components"

import { Sidebar as KodiSidebar } from "@/components/primitives/sidebar"
import { TailwindIndicator } from "@/components/tailwind-indicator"

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <KodiSidebar className="h-screen" gap="0">
      <Sidebar />
      <TailwindIndicator />
      {children}
    </KodiSidebar>
  )
}

export default Layout
