import { keyframes } from "@vanilla-extract/css";

export const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const bounce = keyframes({
  "25%": { transform: "translateY(-20%)" },
  "40%": { transform: "translateY(-3%)" },
  "0%, 60%, 100%": { transform: "translateY(0)" },
});

export const fadeOutBloom = keyframes({
  "100%": { opacity: 0, filter: "brightness(1) blur(20px) " },
  "10%": { opacity: 1, filter: "brightness(2) blur(10px) " },
  "0%": { opacity: 1, filter: "brightness(1) blur(0) " },
});
