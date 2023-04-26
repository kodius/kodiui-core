import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import { SwitchVariants, rootRecipe, switchThumb } from './Switch.css'
import classNames from 'classnames'

type Props = React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & SwitchVariants

export const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, Props>(
  ({ className, tone, ...props }, ref) => (
    <SwitchPrimitives.Root
      className={classNames(rootRecipe({ tone: tone }), className)}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb className={switchThumb} />
    </SwitchPrimitives.Root>
  )
)
Switch.displayName = SwitchPrimitives.Root.displayName
