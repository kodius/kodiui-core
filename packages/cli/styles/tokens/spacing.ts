import { VariantProps, cva } from "class-variance-authority";

export const paddingVariants = cva("", {
  variants: {
    p: {
      xxs: "p-xxs",
      xs: "p-xs",
      sm: "p-sm",
      md: "p-md",
      lg: "p-lg",
      xl: "p-xl",
      "2xl": "p-2xl",
      "3xl": "p-3xl",
      "5xl": "p-5xl",
      "0": "p-0",
    },
  },
  defaultVariants: {
    p: "sm",
  },
});

export type PaddingVariants = VariantProps<typeof paddingVariants>;

export const gapVariants = cva("", {
  variants: {
    gap: {
      xxs: "gap-xxs",
      xs: "gap-xs",
      sm: "gap-sm",
      md: "gap-md",
      lg: "gap-lg",
      xl: "gap-xl",
      "2xl": "gap-2xl",
      "3xl": "gap-3xl",
      "5xl": "gap-5xl",
      "0": "gap-0",
    },
  },
  defaultVariants: {
    gap: "sm",
  },
});

export type GapVariants = VariantProps<typeof gapVariants>;
