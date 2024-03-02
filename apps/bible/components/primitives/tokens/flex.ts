import { VariantProps, cva } from 'class-variance-authority'

export const flexVariants = cva('', {
  variants: {
    flexDirection: {
      row: 'flex-row',
      rowReverse: 'flex-row-reverse',
      col: 'flex-col',
      colReverse: 'flex-col-reverse',
    },
    wrap: {
      true: 'flex-wrap',
      wrap: 'flex-wrap',
      wrapReverse: 'flex-wrap-reverse',
      nowrap: 'flex-nowrap',
    },
    justify: {
      normal: 'normal',
      start: 'justify-start',
      end: 'justify-end',
      center: 'justify-center',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
      stretch: 'justify-stretch',
    },
    items: {
      start: 'items-start',
      end: 'items-end',
      center: 'items-center',
      baseline: 'items-baseline',
      stretch: 'items-stretch',
    },
  },
})

export type FlexVariants = VariantProps<typeof flexVariants>
