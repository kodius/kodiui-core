export const AnimationIterationCount = [
  "unset",
  "revert",
  "inherit",
  "infinite",
  "-moz-initial",
  "revert-layer",
  1,
  2,
  3,
  4,
] as const;

export type AnimationIterationCountType =
  (typeof AnimationIterationCount)[number];
