import { vars, tokens, DarkColors } from '@kodiui/ui'
import { createTheme } from '@vanilla-extract/css'

const { colors, ...restTokens } = tokens

export const lightTheme = createTheme(vars, tokens)

export const darkTheme = createTheme(vars, {
  ...restTokens,
  colors: {
    ...DarkColors,
    brand: DarkColors.sky9,
    brandHover: DarkColors.sky11,
    brandSoftHover: DarkColors.sky6,
    brandSoft: DarkColors.sky5,
    body: DarkColors.sky3,
  },
})
