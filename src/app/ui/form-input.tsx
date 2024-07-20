import { ErrorMessage } from '@hookform/error-message'
import {
  Controller,
  FieldPath,
  FieldValues,
  useFormContext,
} from 'react-hook-form'

import { Input } from '~/app/ui/input'

type FormInputProps<T> = {
  /**
   * The label for the field
   */
  label: string

  /**
   * The name of the field in the form
   */
  name: FieldPath<T extends FieldValues ? T : FieldValues>

  /**
   * Whether or not the input is disabled
   */
  isDisabled?: boolean

  /**
   * show required field indicator
   */
  indicateRequired?: boolean
}

/**
 * A generic form input component that uses react-hook-form.
 *
 * @param {FormInputProps} props The component props.
 * @returns {JSX.Element} The input component.
 */
export function FormInput<T>({
  label,
  name,
  isDisabled,
  indicateRequired,
}: FormInputProps<T>) {
  const {
    control,
    formState: { errors },
  } = useFormContext()
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p>{message}</p>}
      />
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Input
            id={name}
            onChange={onChange}
            value={value}
            disabled={isDisabled}
          />
        )}
      />
    </div>
  )
}
