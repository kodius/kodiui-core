import React, { FC, ReactNode } from "react"
import { Bar } from "@/features/bar/components"
import { Sidebar } from "@/features/sidebar/components"

import { Sidebar as KodiSidebar } from "@/components/primitives/sidebar"
import { TailwindIndicator } from "@/components/tailwind-indicator"

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="overflow-hidden h-screen 2xl:max-w-screen-2xl 2xl:m-auto">
      <Bar />
      <KodiSidebar className="h-screen" gap="0">
        <Sidebar />
        <TailwindIndicator />
        {children}
      </KodiSidebar>
    </div>
  )
}

export default Layout
