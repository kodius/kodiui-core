import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import classNames from 'classnames'
import { barIndicator, barRoot } from './ProgressBar.css'

const ProgressBar = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root ref={ref} className={classNames(barRoot, className)} {...props}>
    <ProgressPrimitive.Indicator
      className={barIndicator}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
ProgressBar.displayName = ProgressPrimitive.Root.displayName

export { ProgressBar }
