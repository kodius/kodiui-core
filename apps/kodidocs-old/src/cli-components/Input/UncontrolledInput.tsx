import { ErrorMessage, FieldValuesFromFieldErrors } from '@hookform/error-message'
import { Stack } from '@kodiui/ui'
import classNames from 'classnames'
import { FieldErrors, FieldName, FieldValues, Path, useFormContext } from 'react-hook-form'
import { isUncontrolledDirty } from './helpers'
import { InputProps } from './Input'
import { inputStyle, inputStyleVariants } from './input.css'
import { Label } from '../Label/Label'
import { Text } from '@cli-components/Text'

interface Props<T> extends InputProps<T> {
  name: Path<T>
}

export const UncontrolledInput = <T extends FieldValues>({
  label,
  dangerouslySetInnerHTML,
  ...rest
}: Props<T>) => {
  const form = useFormContext<T>()
  const {
    formState: { errors },
  } = form

  const ifError = Boolean(errors[rest.name])

  const styleVariant = ifError ? 'error' : 'none'

  const content = (
    <>
      <input
        className={classNames(inputStyle, inputStyleVariants[styleVariant])}
        {...form.register(rest.name, rest.registerOptions)}
        {...rest}
        id={rest.name}
        name={rest.name}
      />
      <ErrorMessage
        errors={errors}
        name={rest.name as unknown as FieldName<FieldValuesFromFieldErrors<FieldErrors<T>>>}
        render={({ message }) => (
          <Text size="xsmall" tone="critical">
            {message}
          </Text>
        )}
      />
    </>
  )

  if (isUncontrolledDirty<T>(rest)) return null

  if (label) {
    return (
      <Stack gap="xs">
        <Label htmlFor={rest.name}>{label}</Label>
        {content}
      </Stack>
    )
  }

  return <>{content}</>
}
