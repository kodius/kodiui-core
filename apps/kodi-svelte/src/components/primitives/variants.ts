import {
	align,
	aspect,
	autoCols,
	autoRows,
	backdropBlur,
	backdropBrightness,
	backdropContrast,
	backdropGrayscale,
	backdropInvert,
	backdropOpacity,
	backdropSaturate,
	backdropSepia,
	basis,
	bg,
	bgAttachment,
	bgBlend,
	bgClip,
	bgImage,
	bgOrigin,
	bgPosition,
	bgRepeat,
	bgSize,
	blur,
	borderCollapse,
	borderColor,
	borderSpacing,
	borderSpacingX,
	borderSpacingY,
	borderStyle,
	borderWidth,
	borderWidthB,
	borderWidthL,
	borderWidthR,
	borderWidthT,
	borderWidthX,
	borderWidthY,
	bottom,
	brightness,
	capitalize,
	caption,
	colEnd,
	colSpan,
	colStart,
	columns,
	content,
	contrast,
	cursor,
	decoration,
	decorationColor,
	decorationStyle,
	decorationThickness,
	delay,
	dropShadow,
	duration,
	flexDirection,
	floats,
	fontFamily,
	fontSize,
	fontSmoothing,
	fontStyle,
	fontVariantNumeric,
	fontWeight,
	gap,
	gapX,
	gapY,
	gradientFromStop,
	gradientToStop,
	gradientViaStop,
	grayscale,
	gridCols,
	gridFlow,
	gridRows,
	grow,
	height,
	hueRotate,
	hyphens,
	indent,
	invert,
	italic,
	items,
	justify,
	justifyItems,
	justifySelf,
	leading,
	left,
	lineClamp,
	lineThrough,
	listStyleImage,
	listStylePosition,
	listStyleType,
	lowercase,
	m,
	maxHeight,
	maxWidth,
	minHeight,
	minWidth,
	mixBlend,
	noUnderline,
	normalCase,
	object,
	objectPosition,
	opacity,
	order,
	origin,
	overflow,
	overflowX,
	overflowY,
	overline,
	overscroll,
	overscrollX,
	overscrollY,
	p,
	pb,
	pl,
	placeContent,
	placeItems,
	placeSelf,
	pointerEvents,
	position,
	pr,
	pt,
	px,
	py,
	right,
	rotate,
	rounded,
	roundedB,
	roundedBl,
	roundedBr,
	roundedL,
	roundedR,
	roundedT,
	roundedTl,
	roundedTr,
	rowEnd,
	rowSpan,
	rowStart,
	saturate,
	scale,
	scrollBehavior,
	scrollM,
	scrollMB,
	scrollME,
	scrollML,
	scrollMR,
	scrollMS,
	scrollMT,
	scrollMX,
	scrollMY,
	scrollP,
	scrollPB,
	scrollPE,
	scrollPL,
	scrollPR,
	scrollPS,
	scrollPT,
	scrollPX,
	scrollPY,
	select,
	self,
	sepia,
	shadow,
	shadowColor,
	shrink,
	skewX,
	skewY,
	snapAlign,
	snapStop,
	snapType,
	table,
	text,
	textAlign,
	textClip,
	textEllipsis,
	textOverflow,
	textTransform,
	top,
	touch,
	tracking,
	transition,
	transitionTimingFunction,
	translateX,
	translateY,
	truncate,
	underline,
	underlineOffset,
	uppercase,
	visibility,
	whitespace,
	width,
	willChange,
	wordBreak,
	wrap,
	z,
} from "$styles/tokens"
import { cva } from "class-variance-authority"

export const boxVariants = cva("", {
	variants: {
		// position properties
		position,
		fixed: { true: "fixed" },
		absolute: { true: "absolute" },
		relative: { true: "relative" },
		sticky: { true: "sticky" },
		top,
		bottom,
		left,
		right,
		//display properties
		block: { true: "block" },
		inlineBlock: { true: "inline-block" },
		flex: { true: "flex" },
		inlineFlex: { true: "inline-flex" },
		contents: { true: "contents" },
		inline: { true: "inline" },
		grid: { true: "grid" },
		inlineGrid: { true: "inline-grid" },
		listItem: { true: "list-item" },
		hidden: { true: "hidden" },
		flexDirection,
		basis,
		wrap,
		justify,
		grow,
		shrink,
		order,
		content,
		items,
		self,
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
		z,
		width,
		minWidth,
		maxWidth,
		height,
		minHeight,
		maxHeight,
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
		text,
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
		gridCols,
		colSpan,
		colStart,
		colEnd,
		gridRows,
		rowSpan,
		rowStart,
		rowEnd,
		gridFlow,
		autoCols,
		autoRows,
		justifyItems,
		justifySelf,
		placeContent,
		placeItems,
		placeSelf,
		borderCollapse,
		borderSpacing,
		borderSpacingX,
		borderSpacingY,
		table,
		caption,
		m,
		object,
		objectPosition,
		overscroll,
		overscrollX,
		overscrollY,
		aspect,
		columns,
		floats,
		cursor,
		pointerEvents,
		scrollBehavior,
		snapAlign,
		snapStop,
		snapType,
		touch,
		select,
		willChange,
		scrollM,
		scrollMX,
		scrollMY,
		scrollMS,
		scrollME,
		scrollMT,
		scrollMB,
		scrollML,
		scrollMR,
		scrollP,
		scrollPX,
		scrollPY,
		scrollPS,
		scrollPE,
		scrollPT,
		scrollPB,
		scrollPL,
		scrollPR,
	},
	defaultVariants: {
		//
	},
})
