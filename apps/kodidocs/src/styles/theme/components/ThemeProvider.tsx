import React, { FC, PropsWithChildren } from 'react'
import { Noto_Sans } from 'next/font/google'
import { Sidebar as KodiSidebar } from '@kodiui/ui'

import classNames from 'classnames'

import '@kodiui/ui/style.css'
import { Sidebar } from '@features/sidebar'
import { lightTheme } from '@styles'

const roboto = Noto_Sans({ subsets: ['latin'], weight: ['400', '700', '900'] })

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <body className={classNames(roboto.className, lightTheme)}>
      <KodiSidebar gap="0">
        {/* this is not an error. Typescirpt dose not know about server components*/}
        {/* @ts-expect-error Server Component */}
        <Sidebar />
        {children}
      </KodiSidebar>
    </body>
  )
}
