<script lang="ts">
	import type { BoxProps } from "./types"
	import { boxVariants } from "./variants"

	type $$Props = BoxProps

	//default
	let flex: $$Props["flex"] = true
	export let gap: Partial<$$Props>["gap"] = "sm"
	//position
	export let position: Partial<$$Props>["position"] = undefined
	export let fixed: Partial<$$Props>["fixed"] = undefined
	export let absolute: Partial<$$Props>["absolute"] = undefined
	export let relative: Partial<$$Props>["relative"] = undefined
	export let sticky: Partial<$$Props>["sticky"] = undefined
	export let top: Partial<$$Props>["top"] = undefined
	export let bottom: Partial<$$Props>["bottom"] = undefined
	export let left: Partial<$$Props>["left"] = undefined
	export let right: Partial<$$Props>["right"] = undefined
	//flex
	export let flexDirection: Partial<$$Props>["flexDirection"] = undefined
	export let wrap: Partial<$$Props>["wrap"] = undefined
	export let basis: Partial<$$Props>["basis"] = undefined
	export let grow: Partial<$$Props>["grow"] = undefined
	export let shrink: Partial<$$Props>["shrink"] = undefined
	export let order: Partial<$$Props>["order"] = undefined
	export let justifyContent: Partial<$$Props>["justifyContent"] = undefined
	export let alignContent: Partial<$$Props>["alignContent"] = undefined
	export let alignItems: Partial<$$Props>["alignItems"] = undefined
	export let alignSelf: Partial<$$Props>["alignSelf"] = undefined
	export let placeContent: Partial<$$Props>["placeContent"] = undefined
	export let placeItems: Partial<$$Props>["placeItems"] = undefined
	export let placeSelf: Partial<$$Props>["placeSelf"] = undefined
	export let gapX: Partial<$$Props>["gapX"] = undefined
	export let gapY: Partial<$$Props>["gapY"] = undefined
	//spacing
	export let p: Partial<$$Props>["p"] = undefined
	export let px: Partial<$$Props>["px"] = undefined
	export let py: Partial<$$Props>["py"] = undefined
	export let pt: Partial<$$Props>["pt"] = undefined
	export let pb: Partial<$$Props>["pb"] = undefined
	export let pl: Partial<$$Props>["pl"] = undefined
	export let pr: Partial<$$Props>["pr"] = undefined
	//overflow, visibility & z-index
	export let overflow: Partial<$$Props>["overflow"] = undefined
	export let overflowX: Partial<$$Props>["overflowX"] = undefined
	export let overflowY: Partial<$$Props>["overflowY"] = undefined
	export let visibility: Partial<$$Props>["visibility"] = undefined
	export let zIndex: Partial<$$Props>["zIndex"] = undefined
	//sizes
	export let width: Partial<$$Props>["width"] = undefined
	export let minWidth: Partial<$$Props>["minWidth"] = undefined
	export let maxWidth: Partial<$$Props>["maxWidth"] = undefined
	export let height: Partial<$$Props>["height"] = undefined
	export let minHeight: Partial<$$Props>["minHeight"] = undefined
	export let maxHeight: Partial<$$Props>["maxHeight"] = undefined
	//borders
	export let borderColor: Partial<$$Props>["borderColor"] = undefined
	export let rounded: Partial<$$Props>["rounded"] = undefined
	export let roundedT: Partial<$$Props>["roundedT"] = undefined
	export let roundedB: Partial<$$Props>["roundedB"] = undefined
	export let roundedL: Partial<$$Props>["roundedL"] = undefined
	export let roundedR: Partial<$$Props>["roundedR"] = undefined
	export let roundedTl: Partial<$$Props>["roundedTl"] = undefined
	export let roundedTr: Partial<$$Props>["roundedTr"] = undefined
	export let roundedBl: Partial<$$Props>["roundedBl"] = undefined
	export let roundedBr: Partial<$$Props>["roundedBr"] = undefined
	export let borderWidth: Partial<$$Props>["borderWidth"] = undefined
	export let borderWidthX: Partial<$$Props>["borderWidthX"] = undefined
	export let borderWidthY: Partial<$$Props>["borderWidthY"] = undefined
	export let borderWidthT: Partial<$$Props>["borderWidthT"] = undefined
	export let borderWidthB: Partial<$$Props>["borderWidthB"] = undefined
	export let borderWidthL: Partial<$$Props>["borderWidthL"] = undefined
	export let borderWidthR: Partial<$$Props>["borderWidthR"] = undefined
	export let borderStyle: Partial<$$Props>["borderStyle"] = undefined
	//effects
	export let shadow: Partial<$$Props>["shadow"] = undefined
	export let shadowColor: Partial<$$Props>["shadowColor"] = undefined
	export let opacity: Partial<$$Props>["opacity"] = undefined
	export let mixBlend: Partial<$$Props>["mixBlend"] = undefined
	export let bgBlend: Partial<$$Props>["bgBlend"] = undefined
	//filters
	export let blur: Partial<$$Props>["blur"] = undefined
	export let brightness: Partial<$$Props>["brightness"] = undefined
	export let contrast: Partial<$$Props>["contrast"] = undefined
	export let dropShadow: Partial<$$Props>["dropShadow"] = undefined
	export let grayscale: Partial<$$Props>["grayscale"] = undefined
	export let hueRotate: Partial<$$Props>["hueRotate"] = undefined
	export let invert: Partial<$$Props>["invert"] = undefined
	export let saturate: Partial<$$Props>["saturate"] = undefined
	export let sepia: Partial<$$Props>["sepia"] = undefined
	export let backdropBlur: Partial<$$Props>["backdropBlur"] = undefined
	export let backdropBrightness: Partial<$$Props>["backdropBrightness"] = undefined
	export let backdropContrast: Partial<$$Props>["backdropContrast"] = undefined
	export let backdropGrayscale: Partial<$$Props>["backdropGrayscale"] = undefined
	export let backdropInvert: Partial<$$Props>["backdropInvert"] = undefined
	export let backdropOpacity: Partial<$$Props>["backdropOpacity"] = undefined
	export let backdropSaturate: Partial<$$Props>["backdropSaturate"] = undefined
	export let backdropSepia: Partial<$$Props>["backdropSepia"] = undefined
	// typography
	export let text: Partial<$$Props>["text"] = undefined
	export let fontFamily: Partial<$$Props>["fontFamily"] = undefined
	export let fontSize: Partial<$$Props>["fontSize"] = undefined
	export let fontSmoothing: Partial<$$Props>["fontSmoothing"] = undefined
	export let italic: Partial<$$Props>["italic"] = undefined
	export let fontStyle: Partial<$$Props>["fontStyle"] = undefined
	export let fontWeight: Partial<$$Props>["fontWeight"] = undefined
	export let fontVariantNumeric: Partial<$$Props>["fontVariantNumeric"] = undefined
	export let tracking: Partial<$$Props>["tracking"] = undefined
	export let lineClamp: Partial<$$Props>["lineClamp"] = undefined
	export let leading: Partial<$$Props>["leading"] = undefined
	export let listStyleImage: Partial<$$Props>["listStyleImage"] = undefined
	export let listStylePosition: Partial<$$Props>["listStylePosition"] = undefined
	export let listStyleType: Partial<$$Props>["listStyleType"] = undefined
	export let textAlign: Partial<$$Props>["textAlign"] = undefined
	export let underline: Partial<$$Props>["underline"] = undefined
	export let overline: Partial<$$Props>["overline"] = undefined
	export let lineThrough: Partial<$$Props>["lineThrough"] = undefined
	export let noUnderline: Partial<$$Props>["noUnderline"] = undefined
	export let decoration: Partial<$$Props>["decoration"] = undefined
	export let decorationStyle: Partial<$$Props>["decorationStyle"] = undefined
	export let decorationThickness: Partial<$$Props>["decorationThickness"] = undefined
	export let underlineOffset: Partial<$$Props>["underlineOffset"] = undefined
	export let uppercase: Partial<$$Props>["uppercase"] = undefined
	export let lowercase: Partial<$$Props>["lowercase"] = undefined
	export let capitalize: Partial<$$Props>["capitalize"] = undefined
	export let normalCase: Partial<$$Props>["normalCase"] = undefined
	export let textTransform: Partial<$$Props>["textTransform"] = undefined
	export let truncate: Partial<$$Props>["truncate"] = undefined
	export let textEllipsis: Partial<$$Props>["textEllipsis"] = undefined
	export let textClip: Partial<$$Props>["textClip"] = undefined
	export let textOverflow: Partial<$$Props>["textOverflow"] = undefined
	export let align: Partial<$$Props>["align"] = undefined
	export let whitespace: Partial<$$Props>["whitespace"] = undefined
	export let wordBreak: Partial<$$Props>["wordBreak"] = undefined
	export let hyphens: Partial<$$Props>["hyphens"] = undefined
	export let content: Partial<$$Props>["content"] = undefined
	export let indent: Partial<$$Props>["indent"] = undefined
	export let decorationColor: Partial<$$Props>["decorationColor"] = undefined
	//backgrounds
	export let bg: Partial<$$Props>["bg"] = undefined
	export let bgAttachment: Partial<$$Props>["bgAttachment"] = undefined
	export let bgClip: Partial<$$Props>["bgClip"] = undefined
	export let bgOrigin: Partial<$$Props>["bgOrigin"] = undefined
	export let bgPosition: Partial<$$Props>["bgPosition"] = undefined
	export let bgRepeat: Partial<$$Props>["bgRepeat"] = undefined
	export let bgSize: Partial<$$Props>["bgSize"] = undefined
	export let bgImage: Partial<$$Props>["bgImage"] = undefined
	export let gradientFromStop: Partial<$$Props>["gradientFromStop"] = undefined
	export let gradientToStop: Partial<$$Props>["gradientToStop"] = undefined
	export let gradientViaStop: Partial<$$Props>["gradientViaStop"] = undefined
	//transitions, transforms and animations
	export let transition: Partial<$$Props>["transition"] = undefined
	export let duration: Partial<$$Props>["duration"] = undefined
	export let transitionTimingFunction: Partial<$$Props>["transitionTimingFunction"] = undefined
	export let delay: Partial<$$Props>["delay"] = undefined
	export let scale: Partial<$$Props>["scale"] = undefined
	export let rotate: Partial<$$Props>["rotate"] = undefined
	export let translateX: Partial<$$Props>["translateX"] = undefined
	export let translateY: Partial<$$Props>["translateY"] = undefined
	export let skewX: Partial<$$Props>["skewX"] = undefined
	export let skewY: Partial<$$Props>["skewY"] = undefined
	export let origin: Partial<$$Props>["origin"] = undefined
</script>

<div
	class={boxVariants({
		position,
		fixed,
		absolute,
		relative,
		sticky,
		top,
		bottom,
		left,
		right,
		flex,
		flexDirection,
		wrap,
		justifyContent,
		basis,
		grow,
		shrink,
		order,
		alignContent,
		alignItems,
		alignSelf,
		placeContent,
		placeItems,
		placeSelf,
		gap,
		gapX,
		gapY,
		p,
		px,
		py,
		pt,
		pb,
		pl,
		pr,
		overflow,
		overflowX,
		overflowY,
		visibility,
		zIndex,
		width,
		minWidth,
		maxWidth,
		height,
		minHeight,
		maxHeight,
		text,
		borderColor,
		rounded,
		roundedT,
		roundedB,
		roundedL,
		roundedR,
		roundedTl,
		roundedTr,
		roundedBl,
		roundedBr,
		borderWidth,
		borderWidthX,
		borderWidthY,
		borderWidthT,
		borderWidthB,
		borderWidthL,
		borderWidthR,
		borderStyle,
		shadow,
		shadowColor,
		opacity,
		mixBlend,
		bgBlend,
		blur,
		brightness,
		contrast,
		dropShadow,
		grayscale,
		hueRotate,
		invert,
		saturate,
		sepia,
		backdropBlur,
		backdropBrightness,
		backdropContrast,
		backdropGrayscale,
		backdropInvert,
		backdropOpacity,
		backdropSaturate,
		backdropSepia,
		fontFamily,
		fontSize,
		fontSmoothing,
		italic,
		fontStyle,
		fontWeight,
		fontVariantNumeric,
		tracking,
		lineClamp,
		leading,
		listStyleImage,
		listStylePosition,
		listStyleType,
		textAlign,
		underline,
		overline,
		lineThrough,
		noUnderline,
		decoration,
		decorationStyle,
		decorationThickness,
		underlineOffset,
		uppercase,
		lowercase,
		capitalize,
		normalCase,
		textTransform,
		truncate,
		textEllipsis,
		textClip,
		textOverflow,
		indent,
		align,
		whitespace,
		wordBreak,
		hyphens,
		content,
		decorationColor,
		bg,
		bgAttachment,
		bgClip,
		bgOrigin,
		bgPosition,
		bgRepeat,
		bgSize,
		bgImage,
		gradientFromStop,
		gradientViaStop,
		gradientToStop,
		transition,
		duration,
		transitionTimingFunction,
		delay,
		scale,
		rotate,
		translateX,
		translateY,
		skewX,
		skewY,
		origin,
		class: $$props.class,
	})}
>
	<slot />
</div>
