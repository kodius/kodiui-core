import { ReactNode } from "react"

import { text, textAlign as textAlignToken } from "@/styles/tokens"

type ColorKeys = keyof typeof text
type TextAlignKyes = keyof typeof textAlignToken

export interface TypographyProps {
  className?: string
  color?: ColorKeys
  textAlign?: TextAlignKyes
  children: ReactNode
  withIcon?: boolean
}
