import { ErrorMessage } from '@hookform/error-message'
import {
  Controller,
  type FieldPath,
  type FieldValues,
  useFormContext,
} from 'react-hook-form'

import { Input } from '~/app/components/ui/input'

type FormInputProps<TData> = {
  /**
   * The label for the field
   */
  label: string

  /**
   * The name of the field in the form
   */
  name: FieldPath<TData extends FieldValues ? TData : FieldValues>

  /**
   * Whether or not the input is disabled
   */
  isDisabled?: boolean
}

/**
 * A generic form input component that uses react-hook-form to provide form context.
 *
 * @param {FormInputProps} props The input component props.
 * @returns {JSX.Element} The input component.
 */
export function FormInput<TData>({
  label,
  name,
  isDisabled,
}: FormInputProps<TData>) {
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
