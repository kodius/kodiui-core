import React from "react"
import Link from "next/link"

import { Text, TextProps } from "./text"

type TextLinkProps = {
  href: string
}

type Props = TextLinkProps & TextProps

const TextLink = React.forwardRef<HTMLHeadingElement, Props>(
  ({ children, href, ...props }, ref) => {
    return (
      <Link href={href}>
        <Text ref={ref} {...props}>
          {children}
        </Text>
      </Link>
    )
  }
)

TextLink.displayName = "TextLink"

export { TextLink }
