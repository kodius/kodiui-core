import { InputProps } from './Input'

export const isUncontrolledDirty = <T>(props: InputProps<T>): boolean => {
  if (!props.name || props.name === 'dirty-input') {
    throw 'props.name is dirty'
  } else return false
}
