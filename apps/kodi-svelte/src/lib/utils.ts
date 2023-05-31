import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import type { ScreenKeys } from "../styles/tokens"

export const getCSSPropertyValue = <T extends string>(
	property: { [key in ScreenKeys]?: T } | T,
	styles: { [key in T]: string }
): string => {
	if (typeof property === "string") {
		return styles[property]
	}

	return Object.entries(property)
		.map(([screen, value]) => {
			const propertyValue = styles[value]
			return screen ? `${screen}:${propertyValue}` : propertyValue
		})
		.join(" ")
}

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
