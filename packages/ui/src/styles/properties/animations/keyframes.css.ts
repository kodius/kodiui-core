import { keyframes } from "@vanilla-extract/css";

export const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const fadeOut = keyframes({
  to: { opacity: 0 },
});

export const fadeInBloom = keyframes({
  "0%": { opacity: 0, filter: "brightness(1) blur(20px)" },
  "10%": { opacity: 1, filter: "brightness(2) blur(10px)" },
  "100%": { opacity: 1, filter: "brightness(1) blur(0)" },
});

export const bounce = keyframes({
  "25%": { transform: "translateY(-20%)" },
  "40%": { transform: "translateY(-3%)" },
  "0%, 60%, 100%": { transform: "translateY(0)" },
});

export const fadeOutBloom = keyframes({
  "100%": { opacity: 0, filter: "brightness(1) blur(20px)" },
  "10%": { opacity: 1, filter: "brightness(2) blur(10px)" },
  "0%": { opacity: 1, filter: "brightness(1) blur(0)" },
});

export const scaleUp = keyframes({
  to: { transform: "scale(1.25)" },
});

export const scaleDown = keyframes({
  to: { transform: "scale(.75)" },
});

export const slideOutUp = keyframes({
  to: { transform: "translateY(-100%)" },
});

export const slideOutDown = keyframes({
  to: { transform: "translateY(100%)" },
});

export const slideOutRight = keyframes({
  to: { transform: "translateX(100%)" },
});

export const slideOutLeft = keyframes({
  to: { transform: "translateX(-100%)" },
});

export const slideInLeft = keyframes({
  from: { transform: "translateX(100%)" },
});

export const slideInRight = keyframes({
  from: { transform: "translateX(-100%)" },
});

export const slideInUp = keyframes({
  from: { transform: "translateY(100%)" },
});

export const slideInDown = keyframes({
  from: { transform: "translateY(-100%)" },
});

export const shakeX = keyframes({
  "0%, 100%": { transform: "translateX(0%)" },
  "20%": { transform: "translateX(-5%)" },
  "40%": { transform: "translateX(5%)" },
  "60%": { transform: "translateX(-5%)" },
  "80%": { transform: "translateX(5%)" },
});

export const shakeY = keyframes({
  "0%, 100%": { transform: "translateY(0%)" },
  "20%": { transform: "translateY(-5%)" },
  "40%": { transform: "translateY(5%)" },
  "60%": { transform: "translateY(-5%)" },
  "80%": { transform: "translateY(5%)" },
});

export const spin = keyframes({
  to: { transform: "rotate(1turn)" },
});

export const ping = keyframes({
  "90%, 100%": { transform: "scale(2)", opacity: 0 },
});

export const blink = keyframes({
  "0%, 100%": { opacity: 0 },
  "50%": { opacity: 0.5 },
});

export const float = keyframes({
  "50%": { transform: "translateY(-25%)" },
});

export const pulse = keyframes({
  "50%": { transform: "scale(.9,.9)" },
});
