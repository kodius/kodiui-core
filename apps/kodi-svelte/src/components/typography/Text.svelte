<script lang="ts">
    import type { TypographyProps } from "./types"
    import { typographyVariants } from "./variants"

    type $$Props = TypographyProps

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
	export let indent: Partial<$$Props>["indent"] = undefined
	export let decorationColor: Partial<$$Props>["decorationColor"] = undefined
	export let text: Partial<$$Props>["text"] = undefined
</script>

<p class={typographyVariants({
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
    text,
    decorationColor,
})}>
    <slot/>
</p>