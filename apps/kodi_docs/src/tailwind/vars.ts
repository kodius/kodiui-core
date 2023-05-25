export const spacing = {
  "0": "0",
  xxs: ".25rem",
  xs: ".5rem",
  sm: "1rem",
  md: "1.25rem",
  lg: "1.5rem",
  xl: "2rem",
  xxl: "2rem",
  xxxl: "3rem",
} as const;

export const gapSpacing: Record<SpacingKeys, string> = {
  "0": "gap-0",
  xxs: "gap-xxs",
  xs: "gap-xs",
  sm: "gap-sm",
  md: "gap-md",
  lg: "gap-lg",
  xl: "gap-xl",
  xxl: "gap-xxl",
  xxxl: "gap-xxxl",
} as const;

export const paddingSpacing: Record<SpacingKeys, string> = {
  "0": "p-0",
  xxs: "p-xxs",
  xs: "p-xs",
  sm: "p-sm",
  md: "p-md",
  lg: "p-lg",
  xl: "p-xl",
  xxl: "p-xxl",
  xxxl: "p-xxxl",
} as const;

export type SpacingKeys = keyof typeof spacing;
