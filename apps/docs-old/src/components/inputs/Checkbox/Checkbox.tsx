import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from './CheckIcon'
import classNames from 'classnames'
import { checkboxIndicator, checkboxRoot } from './Checkbox.css'

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root ref={ref} className={classNames(checkboxRoot, className)} {...props}>
    <CheckboxPrimitive.Indicator className={checkboxIndicator}>
      <CheckIcon />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
