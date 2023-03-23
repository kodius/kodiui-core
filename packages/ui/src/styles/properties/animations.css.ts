import * as Keyframes from "./keyframes.css";

export const Animations = {
  "fade-in": Keyframes.fadeIn,
  bounce: Keyframes.bounce,
  "fade-out-bloom": Keyframes.fadeOutBloom,
};

export type AnimationsKeys = keyof typeof Animations;
