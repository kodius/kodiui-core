import type { VariantProps } from "class-variance-authority"

import type { typographyVariants } from "./variants"

export type TypographyProps = Partial<HTMLElement> &
	VariantProps<typeof typographyVariants> & {
		class?: string
	}
