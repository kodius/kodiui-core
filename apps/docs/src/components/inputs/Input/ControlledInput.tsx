import { Text } from '@/components'
import { Stack } from '@kodiui/ui'
import { FieldValues } from 'react-hook-form'
import { InputProps } from './Input'
import { inputStyle } from './input.css'

export const ControlledInput = <T extends FieldValues>(props: InputProps<T>) => {
  const content = (
    <>
      <input className={inputStyle} {...props} />
    </>
  )

  if (props.label) {
    return (
      <Stack gap="xxs">
        <Text size="small">{props.label}</Text>
        {content}
      </Stack>
    )
  }

  return <>{content}</>
}
