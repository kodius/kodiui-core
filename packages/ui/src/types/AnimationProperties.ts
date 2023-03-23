import { kodiContract } from "../styles/kodiContract.css";
import { AnimationIterationCount } from "./AnimationIterationCount";


export const transitionTime = [ "0.1s", "0.2s", "0.3s", "0.4s", "0.5s", "0.6s", "0.7s", "0.8s", "0.9s", "1s", "1.5s", "2s", "2.5s", "3s", "3.5s", "4s", "4.5s", "5s", "6s", "7s", "8s", "9s", "10s", ] as const;
export type TransitionTime = typeof transitionTime[number]

export const animationProperties = {
  animation: kodiContract.animations,
  animationDuration: transitionTime,
  animationDelay: transitionTime,
  animationIterationCount: AnimationIterationCount,
  transitionTimingFunction: kodiContract.trnasitionTimingFunction,
};

export type AnimationPropertiesKeys = keyof typeof animationProperties;
