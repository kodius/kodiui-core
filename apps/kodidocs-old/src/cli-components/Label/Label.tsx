import React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import classNames from 'classnames'
import { labelRoot } from './Label.css'

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={classNames(labelRoot, className)} {...props} />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
