import React, { FC, PropsWithChildren } from 'react'
import { Noto_Sans } from 'next/font/google'
import { Sidebar as KodiSidebar } from '@kodiui/ui'

import classNames from 'classnames'

import '@kodiui/ui/style.css'
import { Sidebar } from '@/features/sidebar/Sidebar'
import { darkTheme } from '@/styles/contract.css'

const roboto = Noto_Sans({ subsets: ['latin'], weight: ['400', '700', '900'] })

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <body className={classNames(roboto.className, darkTheme)}>
      <KodiSidebar>
        <Sidebar />
        {children}
      </KodiSidebar>
    </body>
  )
}
