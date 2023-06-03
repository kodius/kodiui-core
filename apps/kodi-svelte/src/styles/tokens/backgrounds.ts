import {
	customBackgroundColors,
	customGradientFromColors,
	customGradientToColors,
	customGradientViaColors,
} from "."
import { twBackgroundColors, twFromStops, twToStops, twViaStops } from "./colors"

export const bgAttachment = {
	fixed: "bg-fixed",
	local: "bg-local",
	scroll: "bg-scroll",
}

export const bgClip = {
	border: "bg-clip-border",
	padding: "bg-clip-padding",
	content: "bg-clip-content",
	text: "bg-clip-text",
}

export const bg = {
	...twBackgroundColors,
	...customBackgroundColors,
}

export const bgOrigin = {
	border: "bg-origin-border",
	padding: "bg-origin-padding",
	content: "bg-origin-content",
}

export const bgPosition = {
	bottom: "bg-bottom",
	center: "bg-center",
	left: "bg-left",
	leftBottom: "bg-left-bottom",
	leftTop: "bg-left-top",
	right: "bg-right",
	rightBottom: "bg-right-bottom",
	rightTop: "bg-right-top",
	top: "bg-top",
}

export const bgRepeat = {
	repeat: "bg-repeat",
	noRepeat: "bg-no-repeat",
	repeatX: "bg-repeat-x",
	repeatY: "bg-repeat-y",
	round: "bg-repeat-round",
	space: "bg-repeat-space",
}

export const bgSize = {
	auto: "bg-auto",
	cover: "bg-cover",
	contain: "bg-contain",
}

export const bgImage = {
	none: "bg-none",
	gradientToT: "bg-gradient-to-t",
	gradientToTr: "bg-gradient-to-tr",
	gradientToR: "bg-gradient-to-r",
	gradientToBr: "bg-gradient-to-Br",
	gradientToB: "bg-gradient-to-B",
	gradientToBl: "bg-gradient-to-Bl",
	gradientToL: "bg-gradient-to-L",
	gradientToTl: "bg-gradient-to-Tl",
}

export const gradientFromStop = {
	...twFromStops,
	...customGradientFromColors,
}

export const gradientViaStop = {
	...twViaStops,
	...customGradientViaColors,
}

export const gradientToStop = {
	...twToStops,
	...customGradientToColors,
}
