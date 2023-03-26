import * as Keyframes from "./keyframes.css";

export const Animations = {
  fadeIn: Keyframes.fadeIn,
  bounce: Keyframes.bounce,
  fadeOutBloom: Keyframes.fadeOutBloom,
  fadeInBloom: Keyframes.fadeInBloom,
  fadeOut: Keyframes.fadeOut,
  scaleUp: Keyframes.scaleUp,
  scaleDown: Keyframes.scaleDown,
  slideOutUp: Keyframes.slideOutUp,
  slideOutDown: Keyframes.slideOutDown,
  slideOutRight: Keyframes.slideOutRight,
  slideOutLeft: Keyframes.slideOutLeft,
  slideInUp: Keyframes.slideInUp,
  slideInDown: Keyframes.slideInDown,
  slideInRight: Keyframes.slideInRight,
  slideInLeft: Keyframes.slideInLeft,
  shakeX: Keyframes.shakeX,
  shakeY: Keyframes.shakeY,
  spin: Keyframes.spin,
  ping: Keyframes.ping,
  blink: Keyframes.blink,
  float: Keyframes.float,
  pulse: Keyframes.pulse,
} 
 
export type AnimationsKeys = keyof typeof Animations;
