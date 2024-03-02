import { VariantProps, cva } from 'class-variance-authority'

export const paddingVariants = cva('', {
  variants: {
    p: {
      xxs: 'p-xxs',
      xs: 'p-xs',
      sm: 'p-sm',
      md: 'p-md',
      lg: 'p-lg',
      xl: 'p-xl',
      '2xl': 'p-2xl',
      '3xl': 'p-3xl',
      '5xl': 'p-5xl',
      '0': 'p-0',
    },
  },
  defaultVariants: {
    p: 'sm',
  },
})

export type PaddingVariants = VariantProps<typeof paddingVariants>

export const gapVariants = cva('', {
  variants: {
    gap: {
      xxs: 'gap-xxs',
      xs: 'gap-xs',
      sm: 'gap-sm',
      md: 'gap-md',
      lg: 'gap-lg',
      xl: 'gap-xl',
      '2xl': 'gap-2xl',
      '3xl': 'gap-3xl',
      '5xl': 'gap-5xl',
      '0': 'gap-0',
    },
    gapX: {
      xxs: 'gap-x-xxs',
      xs: 'gap-x-xs',
      sm: 'gap-x-sm',
      md: 'gap-x-md',
      lg: 'gap-x-lg',
      xl: 'gap-x-xl',
      '2xl': 'gap-x-2xl',
      '3xl': 'gap-x-3xl',
      '5xl': 'gap-x-5xl',
      '0': 'gap-x-0',
    },
    gapY: {
      xxs: 'gap-y-xxs',
      xs: 'gap-y-xs',
      sm: 'gap-y-sm',
      md: 'gap-y-md',
      lg: 'gap-y-lg',
      xl: 'gap-y-xl',
      '2xl': 'gap-y-2xl',
      '3xl': 'gap-y-3xl',
      '5xl': 'gap-y-5xl',
      '0': 'gap-y-0',
    },
  },
  defaultVariants: {
    gap: 'sm',
  },
})

export type GapVariants = VariantProps<typeof gapVariants>

export const spacing = {
  xxs: '.25rem',
  xs: '.5rem',
  sm: '1rem',
  md: '1.25rem',
  lg: '1.5rem',
  xl: '1.75rem',
  '2xl': '2rem',
  '3xl': '3rem',
  '5xl': '4rem',
}
