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

export const gapSpacing: Record<SpacingKeys, string> = {
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

export const paddingSpacing: Record<SpacingKeys, string> = {
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
