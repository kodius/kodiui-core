import Link, { LinkProps } from 'next/link'
import React, { FC, PropsWithChildren } from 'react'

type Props = FC<PropsWithChildren & LinkProps>

export const TextLink: Props = ({ children, ...props }) => {
  return <Link {...props}>{children}</Link>
}
