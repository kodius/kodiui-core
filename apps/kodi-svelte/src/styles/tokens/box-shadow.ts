import { twBoxShadowColors } from "./colors"
import { customBoxShadowColors } from "./custom-values"

export const shadow = {
	inherit: "shadow-inherit",
	current: "shadow-current",
	transparent: "shadow-transparent",
	black: "shadow-black",
	white: "shadow-white",
}

export const shadowColor = {
	...twBoxShadowColors,
	...customBoxShadowColors,
}
