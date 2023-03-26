const shadowColor = "220 40% 2%";
const shadowStrength = "25%";

export const BoxShadows = {
  "shadow-1": `0 1px 2px -1px hsl(${shadowColor} / calc(${shadowStrength}))`,
  "shadow-2": `
    0 3px 5px -2px hsl(${shadowColor} / calc(${shadowStrength} + 3%)),
    0 7px 14px -5px hsl(${shadowColor} / calc(${shadowStrength} + 5%))`,

  "shadow-3": `
    0 -1px 3px 0 hsl(${shadowColor} / calc(${shadowStrength} + 2%)),
    0 1px 2px -5px hsl(${shadowColor} / calc(${shadowStrength} + 2%)),
    0 2px 5px -5px hsl(${shadowColor} / calc(${shadowStrength} + 4%)),
    0 4px 12px -5px hsl(${shadowColor} / calc(${shadowStrength} + 5%)),
    0 12px 15px -5px hsl(${shadowColor} / calc(${shadowStrength} + 7%))`,
  "shadow-4": `
    0 -2px 5px 0 hsl(${shadowColor} / calc(${shadowStrength} + 2%)),
    0 1px 1px -2px hsl(${shadowColor} / calc(${shadowStrength} + 3%)),
    0 2px 2px -2px hsl(${shadowColor} / calc(${shadowStrength} + 3%)),
    0 5px 5px -2px hsl(${shadowColor} / calc(${shadowStrength} + 4%)),
    0 9px 9px -2px hsl(${shadowColor} / calc(${shadowStrength} + 5%)),
    0 16px 16px -2px hsl(${shadowColor} / calc(${shadowStrength} + 6%))`,
  "shadow-5": `
    0 -1px 2px 0 hsl(${shadowColor} / calc(${shadowStrength} + 2%)),
    0 2px 1px -2px hsl(${shadowColor} / calc(${shadowStrength} + 3%)),
    0 5px 5px -2px hsl(${shadowColor} / calc(${shadowStrength} + 3%)),
    0 10px 10px -2px hsl(${shadowColor} / calc(${shadowStrength} + 4%)),
    0 20px 20px -2px hsl(${shadowColor} / calc(${shadowStrength} + 5%)),
    0 40px 40px -2px hsl(${shadowColor} / calc(${shadowStrength} + 7%))`,
  "shadow-6": `
    0 -1px 2px 0 hsl(${shadowColor} / calc(${shadowStrength} + 2%)),
    0 3px 2px -2px hsl(${shadowColor} / calc(${shadowStrength} + 3%)),
    0 7px 5px -2px hsl(${shadowColor} / calc(${shadowStrength} + 3%)),
    0 12px 10px -2px hsl(${shadowColor} / calc(${shadowStrength} + 4%)),
    0 22px 18px -2px hsl(${shadowColor} / calc(${shadowStrength} + 5%)),
    0 41px 33px -2px hsl(${shadowColor} / calc(${shadowStrength} + 6%)),
    0 100px 80px -2px hsl(${shadowColor} / calc(${shadowStrength} + 7%))`,
  "inner-shadow-0": `inset 0 0 0 1px hsl$({shadowColor} / calc(${shadowStrength} + 9%))`,
  "inner-shadow-1": `inset 0 1px 2px 0 hsl(${shadowColor} / calc(${shadowStrength} + 9%))`,
  "inner-shadow-2": `inset 0 1px 4px 0 hsl(${shadowColor} / calc(${shadowStrength} + 9%))`,
  "inner-shadow-3": `inset 0 2px 8px 0 hsl(${shadowColor} / calc(${shadowStrength} + 9%))`,
  "inner-shadow-4": `inset 0 2px 14px 0 hsl(${shadowColor} / calc(${shadowStrength} + 9%))`,
};
