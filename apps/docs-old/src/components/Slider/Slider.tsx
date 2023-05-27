import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import classNames from 'classnames'
import { sliderRange, sliderRoot, sliderThumb, sliderTrack } from './Slider.css'

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root ref={ref} className={classNames(sliderRoot, className)} {...props}>
    <SliderPrimitive.Track className={sliderTrack}>
      <SliderPrimitive.Range className={sliderRange} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className={sliderThumb} />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
