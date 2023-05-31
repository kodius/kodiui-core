import { customColors } from "./customColors"

const twTextColors = {
	inherit: "text-inherit",
	current: "text-current",
	transparent: "text-transparent",
	black: "text-black",
	white: "text-white",
	"slate-50": "text-slate-50",
	"slate-100": "text-slate-100",
	"slate-200": "text-slate-200",
	"slate-300": "text-slate-300",
	"slate-400": "text-slate-400",
	"slate-500": "text-slate-500",
	"slate-600": "text-slate-600",
	"slate-700": "text-slate-700",
	"slate-800": "text-slate-800",
	"slate-900": "text-slate-900",
	"slate-950": "text-slate-950",
	"gray-50": "text-gray-50",
	"gray-100": "text-gray-100",
	"gray-200": "text-gray-200",
	"gray-300": "text-gray-300",
	"gray-400": "text-gray-400",
	"gray-500": "text-gray-500",
	"gray-600": "text-gray-600",
	"gray-700": "text-gray-700",
	"gray-800": "text-gray-800",
	"gray-900": "text-gray-900",
	"gray-950": "text-gray-950",
	"zinc-50": "text-zinc-50",
	"zinc-100": "text-zinc-100",
	"zinc-200": "text-zinc-200",
	"zinc-300": "text-zinc-300",
	"zinc-400": "text-zinc-400",
	"zinc-500": "text-zinc-500",
	"zinc-600": "text-zinc-600",
	"zinc-700": "text-zinc-700",
	"zinc-800": "text-zinc-800",
	"zinc-900": "text-zinc-900",
	"zinc-950": "text-zinc-950",
	"neutral-50": "text-neutral-50",
	"neutral-100": "text-neutral-100",
	"neutral-200": "text-neutral-200",
	"neutral-300": "text-neutral-300",
	"neutral-400": "text-neutral-400",
	"neutral-500": "text-neutral-500",
	"neutral-600": "text-neutral-600",
	"neutral-700": "text-neutral-700",
	"neutral-800": "text-neutral-800",
	"neutral-900": "text-neutral-900",
	"neutral-950": "text-neutral-950",
	"stone-50": "text-stone-50",
	"stone-100": "text-stone-100",
	"stone-200": "text-stone-200",
	"stone-300": "text-stone-300",
	"stone-400": "text-stone-400",
	"stone-500": "text-stone-500",
	"stone-600": "text-stone-600",
	"stone-700": "text-stone-700",
	"stone-800": "text-stone-800",
	"stone-900": "text-stone-900",
	"stone-950": "text-stone-950",
	"red-50": "text-red-50",
	"red-100": "text-red-100",
	"red-200": "text-red-200",
	"red-300": "text-red-300",
	"red-400": "text-red-400",
	"red-500": "text-red-500",
	"red-600": "text-red-600",
	"red-700": "text-red-700",
	"red-800": "text-red-800",
	"red-900": "text-red-900",
	"red-950": "text-red-950",
	"orange-50": "text-orange-50",
	"orange-100": "text-orange-100",
	"orange-200": "text-orange-200",
	"orange-300": "text-orange-300",
	"orange-400": "text-orange-400",
	"orange-500": "text-orange-500",
	"orange-600": "text-orange-600",
	"orange-700": "text-orange-700",
	"orange-800": "text-orange-800",
	"orange-900": "text-orange-900",
	"orange-950": "text-orange-950",
	"amber-50": "text-amber-50",
	"amber-100": "text-amber-100",
	"amber-200": "text-amber-200",
	"amber-300": "text-amber-300",
	"amber-400": "text-amber-400",
	"amber-500": "text-amber-500",
	"amber-600": "text-amber-600",
	"amber-700": "text-amber-700",
	"amber-800": "text-amber-800",
	"amber-900": "text-amber-900",
	"amber-950": "text-amber-950",
	"yellow-50": "text-yellow-50",
	"yellow-100": "text-yellow-100",
	"yellow-200": "text-yellow-200",
	"yellow-300": "text-yellow-300",
	"yellow-400": "text-yellow-400",
	"yellow-500": "text-yellow-500",
	"yellow-600": "text-yellow-600",
	"yellow-700": "text-yellow-700",
	"yellow-800": "text-yellow-800",
	"yellow-900": "text-yellow-900",
	"yellow-950": "text-yellow-950",
	"lime-50": "text-lime-50",
	"lime-100": "text-lime-100",
	"lime-200": "text-lime-200",
	"lime-300": "text-lime-300",
	"lime-400": "text-lime-400",
	"lime-500": "text-lime-500",
	"lime-600": "text-lime-600",
	"lime-700": "text-lime-700",
	"lime-800": "text-lime-800",
	"lime-900": "text-lime-900",
	"lime-950": "text-lime-950",
	"green-50": "text-green-50",
	"green-100": "text-green-100",
	"green-200": "text-green-200",
	"green-300": "text-green-300",
	"green-400": "text-green-400",
	"green-500": "text-green-500",
	"green-600": "text-green-600",
	"green-700": "text-green-700",
	"green-800": "text-green-800",
	"green-900": "text-green-900",
	"green-950": "text-green-950",
	"emerald-50": "text-emerald-50",
	"emerald-100": "text-emerald-100",
	"emerald-200": "text-emerald-200",
	"emerald-300": "text-emerald-300",
	"emerald-400": "text-emerald-400",
	"emerald-500": "text-emerald-500",
	"emerald-600": "text-emerald-600",
	"emerald-700": "text-emerald-700",
	"emerald-800": "text-emerald-800",
	"emerald-900": "text-emerald-900",
	"emerald-950": "text-emerald-950",
	"teal-50": "text-teal-50",
	"teal-100": "text-teal-100",
	"teal-200": "text-teal-200",
	"teal-300": "text-teal-300",
	"teal-400": "text-teal-400",
	"teal-500": "text-teal-500",
	"teal-600": "text-teal-600",
	"teal-700": "text-teal-700",
	"teal-800": "text-teal-800",
	"teal-900": "text-teal-900",
	"teal-950": "text-teal-950",
	"cyan-50": "text-cyan-50",
	"cyan-100": "text-cyan-100",
	"cyan-200": "text-cyan-200",
	"cyan-300": "text-cyan-300",
	"cyan-400": "text-cyan-400",
	"cyan-500": "text-cyan-500",
	"cyan-600": "text-cyan-600",
	"cyan-700": "text-cyan-700",
	"cyan-800": "text-cyan-800",
	"cyan-900": "text-cyan-900",
	"cyan-950": "text-cyan-950",
	"sky-50": "text-sky-50",
	"sky-100": "text-sky-100",
	"sky-200": "text-sky-200",
	"sky-300": "text-sky-300",
	"sky-400": "text-sky-400",
	"sky-500": "text-sky-500",
	"sky-600": "text-sky-600",
	"sky-700": "text-sky-700",
	"sky-800": "text-sky-800",
	"sky-900": "text-sky-900",
	"sky-950": "text-sky-950",
	"blue-50": "text-blue-50",
	"blue-100": "text-blue-100",
	"blue-200": "text-blue-200",
	"blue-300": "text-blue-300",
	"blue-400": "text-blue-400",
	"blue-500": "text-blue-500",
	"blue-600": "text-blue-600",
	"blue-700": "text-blue-700",
	"blue-800": "text-blue-800",
	"blue-900": "text-blue-900",
	"blue-950": "text-blue-950",
	"indigo-50": "text-indigo-50",
	"indigo-100": "text-indigo-100",
	"indigo-200": "text-indigo-200",
	"indigo-300": "text-indigo-300",
	"indigo-400": "text-indigo-400",
	"indigo-500": "text-indigo-500",
	"indigo-600": "text-indigo-600",
	"indigo-700": "text-indigo-700",
	"indigo-800": "text-indigo-800",
	"indigo-900": "text-indigo-900",
	"indigo-950": "text-indigo-950",
	"violet-50": "text-violet-50",
	"violet-100": "text-violet-100",
	"violet-200": "text-violet-200",
	"violet-300": "text-violet-300",
	"violet-400": "text-violet-400",
	"violet-500": "text-violet-500",
	"violet-600": "text-violet-600",
	"violet-700": "text-violet-700",
	"violet-800": "text-violet-800",
	"violet-900": "text-violet-900",
	"violet-950": "text-violet-950",
	"purple-50": "text-purple-50",
	"purple-100": "text-purple-100",
	"purple-200": "text-purple-200",
	"purple-300": "text-purple-300",
	"purple-400": "text-purple-400",
	"purple-500": "text-purple-500",
	"purple-600": "text-purple-600",
	"purple-700": "text-purple-700",
	"purple-800": "text-purple-800",
	"purple-900": "text-purple-900",
	"purple-950": "text-purple-950",
	"fuchsia-50": "text-fuchsia-50",
	"fuchsia-100": "text-fuchsia-100",
	"fuchsia-200": "text-fuchsia-200",
	"fuchsia-300": "text-fuchsia-300",
	"fuchsia-400": "text-fuchsia-400",
	"fuchsia-500": "text-fuchsia-500",
	"fuchsia-600": "text-fuchsia-600",
	"fuchsia-700": "text-fuchsia-700",
	"fuchsia-800": "text-fuchsia-800",
	"fuchsia-900": "text-fuchsia-900",
	"fuchsia-950": "text-fuchsia-950",
	"pink-50": "text-pink-50",
	"pink-100": "text-pink-100",
	"pink-200": "text-pink-200",
	"pink-300": "text-pink-300",
	"pink-400": "text-pink-400",
	"pink-500": "text-pink-500",
	"pink-600": "text-pink-600",
	"pink-700": "text-pink-700",
	"pink-800": "text-pink-800",
	"pink-900": "text-pink-900",
	"pink-950": "text-pink-950",
	"rose-50": "text-rose-50",
	"rose-100": "text-rose-100",
	"rose-200": "text-rose-200",
	"rose-300": "text-rose-300",
	"rose-400": "text-rose-400",
	"rose-500": "text-rose-500",
	"rose-600": "text-rose-600",
	"rose-700": "text-rose-700",
	"rose-800": "text-rose-800",
	"rose-900": "text-rose-900",
	"rose-950": "text-rose-950",
}

export const color = {
	...twTextColors,
	...customColors,
}
