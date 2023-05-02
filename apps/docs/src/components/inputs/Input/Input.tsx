import { FieldValues, RegisterOptions, Path } from 'react-hook-form'
import { InputHTMLAttributes } from 'react'
import { ControlledInput } from './ControlledInput'
import { UncontrolledInput } from './UncontrolledInput'
import { Text } from '@/components'

export interface InputProps<T> extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  registerOptions?: RegisterOptions
  controled?: boolean
  name?: Path<T>
  dontPrefilDate?: boolean
  background?: string
  labelLink?: string
}

export const Input = <T extends FieldValues>(props: InputProps<T>) => {
  if (props.controled) {
    return <ControlledInput {...props} />
  } else if (props.name) return <UncontrolledInput<T> name={props.name} {...props} />
  else return <Text tone="critical">name is required</Text>
}

Input.defaultProps = {
  controled: false,
}
