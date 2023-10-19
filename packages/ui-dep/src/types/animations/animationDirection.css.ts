export const AnimationDirection = [
  "normal",
  "reverse",
  "alternate",
  "alternate-reverse",
] as const;

export type AnimationDirectionType = (typeof AnimationDirection)[number];
