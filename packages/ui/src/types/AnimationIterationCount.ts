export const AnimationIterationCount = [
  "unset",
  "revert",
  "inherit",
  "infinite",
  "-moz-initial",
  "revert-layer",
] as const;

export type AnimationIterationCountType =
  (typeof AnimationIterationCount)[number];
