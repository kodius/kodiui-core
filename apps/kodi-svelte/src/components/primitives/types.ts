import type { VariantProps } from "class-variance-authority"

import type { boxVariants } from "./variants"

export type BoxProps = Partial<HTMLDivElement> &
	VariantProps<typeof boxVariants> & {
		class?: string
	}
