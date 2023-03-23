export const AnimationFillMode = [
  "none",
  "forwards",
  "backwards",
  "both",
] as const;

export type AnimationFillModeType = (typeof AnimationFillMode)[number];
