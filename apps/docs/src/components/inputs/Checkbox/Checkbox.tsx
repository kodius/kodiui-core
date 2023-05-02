import React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from './CheckIcon'
import { checkboxIndicator, checkboxRoot } from './Checkbox.css'

export const Checkbox = () => {
  return (
    <CheckboxPrimitive.Root className={checkboxRoot}>
      <CheckboxPrimitive.Indicator className={checkboxIndicator}>
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
