import Link, { LinkProps } from 'next/link'
import React, { FC, PropsWithChildren } from 'react'

type AS = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>

type Props = FC<PropsWithChildren & LinkProps & AS>

export const TextLink: Props = ({ children, dangerouslySetInnerHTML, ...props }) => {
  return <Link {...props}>{children}</Link>
}
