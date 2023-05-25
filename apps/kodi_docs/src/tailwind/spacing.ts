export const spacing = {
  xxs: ".25rem",
  xs: ".5rem",
  sm: "1rem",
  md: "1.25rem",
  lg: "1.5rem",
};

export const gapSpacing = {
  xxs: "gap-xxs",
  xs: "gap-xs",
  sm: "gap-sm",
  md: "gap-md",
  lg: "gap-lg",
};

export type SpacingKeys = keyof typeof spacing;

export type GapSpacingValues = (typeof gapSpacing)[keyof typeof gapSpacing];
