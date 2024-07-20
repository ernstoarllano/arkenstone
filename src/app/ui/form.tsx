'use client'

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form'

type FormProps<T extends FieldValues> = {
  /**
   * The form control object returned by `useForm`
   */
  form: UseFormReturn<T>

  /**
   * The function to call when the form is submitted
   */
  onSubmit: SubmitHandler<T>

  /**
   * The form children
   */
  children: React.ReactNode
}

/**
 * A generic form component that wraps a form element and provides form context.
 *
 * @param {FormProps} props The form component props.
 * @returns {JSX.Element} The form component.
 */
export function Form<T extends FieldValues>({
  form,
  onSubmit,
  children,
}: FormProps<T>) {
  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col space-y-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  )
}
