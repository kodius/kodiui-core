import { VariantProps, cva } from "class-variance-authority"

export const hiddenVariants = cva("", {
  variants: {
    above: {
      sm: "md:hidden",
      md: "lg:hidden",
      lg: "xl:hidden",
      xl: "2xl:hidden",
    },
    below: {
      sm: "hidden sm:block",
      md: "hidden md:block",
      lg: "hidden lg:block",
      xl: "hidden xl:block",
      "2xl": "hidden 2xl:block",
    },
  },
})
export type HiddenVariants = VariantProps<typeof hiddenVariants>
