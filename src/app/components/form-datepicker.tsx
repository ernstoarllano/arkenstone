'use client'

import { ErrorMessage } from '@hookform/error-message'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import {
  Controller,
  type FieldPath,
  type FieldValues,
  useFormContext,
} from 'react-hook-form'

import { Button } from '~/app/components/ui/button'
import { Calendar } from '~/app/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/app/components/ui/popover'

import { cn } from '~/lib/utils'

type FormDatePickerProps<TData> = {
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
 * A generic form date picker component that uses react-hook-form to provide form context.
 *
 * @param {FormDatePickerProps} props The date picker component props.
 * @returns {JSX.Element} The date picker component.
 */
export function FormDatePicker<TData>({
  label,
  name,
  isDisabled,
}: FormDatePickerProps<TData>) {
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
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
                className={cn(
                  'w-[240px] pl-3 text-left font-normal',
                  !value && 'text-muted-foreground',
                )}
              >
                {value ? format(value, 'PPP') : <span>Pick a date</span>}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Calendar
                mode="single"
                selected={value}
                onSelect={onChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        )}
      />
    </div>
  )
}
