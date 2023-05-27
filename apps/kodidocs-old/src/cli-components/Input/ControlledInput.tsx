import { Stack } from '@kodiui/ui'
import { FieldValues } from 'react-hook-form'
import { InputProps } from './Input'
import { inputStyle } from './input.css'
import { Label } from '@cli-components/Label'

export const ControlledInput = <T extends FieldValues>({
  dangerouslySetInnerHTML,
  ...props
}: InputProps<T>) => {
  const content = (
    <>
      <input className={inputStyle} {...props} id={props.id} name={props.name} />
    </>
  )

  if (props.label) {
    return (
      <Stack gap="xs">
        <Label htmlFor={props.name}>{props.label}</Label>
        {content}
      </Stack>
    )
  }

  return <>{content}</>
}
