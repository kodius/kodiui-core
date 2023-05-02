import { Text } from '@/components'
import { ErrorMessage, FieldValuesFromFieldErrors } from '@hookform/error-message'
import { Stack } from '@kodiui/ui'
import classNames from 'classnames'
import { FieldErrors, FieldName, FieldValues, Path, useFormContext } from 'react-hook-form'
import { isUncontrolledDirty } from './helpers'
import { InputProps } from './Input'
import { inputStyle, inputStyleVariants } from './input.css'

interface Props<T> extends InputProps<T> {
  name: Path<T>
}

export const UncontrolledInput = <T extends FieldValues>(props: Props<T>) => {
  const form = useFormContext<T>()
  const {
    formState: { errors },
  } = form

  const ifError = Boolean(errors[props.name])

  const styleVariant = ifError ? 'error' : 'none'

  const content = (
    <>
      <input
        className={classNames(inputStyle, inputStyleVariants[styleVariant])}
        {...form.register(props.name, props.registerOptions)}
        {...props}
      />
      <ErrorMessage
        errors={errors}
        name={props.name as unknown as FieldName<FieldValuesFromFieldErrors<FieldErrors<T>>>}
        render={({ message }) => <Text tone="critical">{message}</Text>}
      />
    </>
  )

  if (isUncontrolledDirty<T>(props)) return null

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
