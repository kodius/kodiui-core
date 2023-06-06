import { VariantProps, cva } from "class-variance-authority"

export const textVariants = cva("", {
  variants: {
    textAlign: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
      start: "text-start",
      end: "text-end",
    },
  },
})

export type TextVariants = VariantProps<typeof textVariants>
