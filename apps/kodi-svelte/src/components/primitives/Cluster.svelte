<script lang="ts">
	import type { BoxProps } from "./types"
	import { boxVariants } from "./variants"

	type $$Props = BoxProps

	//default
	let flex: $$Props["flex"] = true
	let flexWrap: $$Props["flexWrap"] = "wrap"
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
	export let flexBasis: Partial<$$Props>["flexBasis"] = undefined
	export let flexGrow: Partial<$$Props>["flexGrow"] = undefined
	export let flexShrink: Partial<$$Props>["flexShrink"] = undefined
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
	//colors
	export let backgroundColor: Partial<$$Props>["backgroundColor"] = undefined
	export let borderColor: Partial<$$Props>["borderColor"] = undefined
	export let color: Partial<$$Props>["color"] = undefined
	//borders
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
		flexWrap,
		justifyContent,
		flexBasis,
		flexGrow,
		flexShrink,
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
		backgroundColor,
		color,
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
		class: $$props.class,
	})}
>
	<slot />
</div>
