export const AnimationPlayState = [
  "none",
  "forwards",
  "backwards",
  "both",
] as const;

export type AnimationPlayStateType = (typeof AnimationPlayState)[number];
