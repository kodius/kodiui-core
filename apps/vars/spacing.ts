export type SpacingKeys = keyof typeof spacing

export const spacing = {
  "0": "0px",
  xxs: ".25rem",
  xs: ".5rem",
  sm: "1rem",
  md: "1.25rem",
  lg: "1.5rem",
  xl: "1.75rem",
  "2xl": "2rem",
  "3xl": "3rem",
  "5xl": "4rem",
} as const

export const gap: Record<SpacingKeys, string> = {
  "0": "gap-0",
  xxs: "gap-xxs",
  xs: "gap-xs",
  sm: "gap-sm",
  md: "gap-md",
  lg: "gap-lg",
  xl: "gap-xl",
  "2xl": "gap-2xl",
  "3xl": "gap-3xl",
  "5xl": "gap-5xl",
} as const

export const p: Record<SpacingKeys, string> = {
  "0": "p-0",
  xxs: "p-xxs",
  xs: "p-xs",
  sm: "p-sm",
  md: "p-md",
  lg: "p-lg",
  xl: "p-xl",
  "2xl": "p-2xl",
  "3xl": "p-3xl",
  "5xl": "p-5xl",
} as const

export const py: Record<SpacingKeys, string> = {
  "0": "py-0",
  xxs: "py-xxs",
  xs: "py-xs",
  sm: "py-sm",
  md: "py-md",
  lg: "py-lg",
  xl: "py-xl",
  "2xl": "py-2xl",
  "3xl": "py-3xl",
  "5xl": "py-5xl",
} as const

export const px: Record<SpacingKeys, string> = {
  "0": "px-0",
  xxs: "px-xxs",
  xs: "px-xs",
  sm: "px-sm",
  md: "px-md",
  lg: "px-lg",
  xl: "px-xl",
  "2xl": "px-2xl",
  "3xl": "px-3xl",
  "5xl": "px-5xl",
} as const

export const pr: Record<SpacingKeys, string> = {
  "0": "pr-0",
  xxs: "pr-xxs",
  xs: "pr-xs",
  sm: "pr-sm",
  md: "pr-md",
  lg: "pr-lg",
  xl: "pr-xl",
  "2xl": "pr-2xl",
  "3xl": "pr-3xl",
  "5xl": "pr-5xl",
} as const

export const pl: Record<SpacingKeys, string> = {
  "0": "pl-0",
  xxs: "pl-xxs",
  xs: "pl-xs",
  sm: "pl-sm",
  md: "pl-md",
  lg: "pl-lg",
  xl: "pl-xl",
  "2xl": "pl-2xl",
  "3xl": "pl-3xl",
  "5xl": "pl-5xl",
} as const

export const pb: Record<SpacingKeys, string> = {
  "0": "pb-0",
  xxs: "pb-xxs",
  xs: "pb-xs",
  sm: "pb-sm",
  md: "pb-md",
  lg: "pb-lg",
  xl: "pb-xl",
  "2xl": "pb-2xl",
  "3xl": "pb-3xl",
  "5xl": "pb-5xl",
} as const

export const pt: Record<SpacingKeys, string> = {
  "0": "pt-0",
  xxs: "pt-xxs",
  xs: "pt-xs",
  sm: "pt-sm",
  md: "pt-md",
  lg: "pt-lg",
  xl: "pt-xl",
  "2xl": "pt-2xl",
  "3xl": "pt-3xl",
  "5xl": "pt-5xl",
} as const
