'use client'

import {
  type FieldValues,
  FormProvider,
  type SubmitHandler,
  type UseFormReturn,
} from 'react-hook-form'

type FormProps<TData extends FieldValues> = {
  /**
   * The form control object returned by `useForm`
   */
  form: UseFormReturn<TData>

  /**
   * The function to call when the form is submitted
   */
  onSubmit: SubmitHandler<TData>

  /**
   * The form children
   */
  children: React.ReactNode
}

/**
 * A generic form component that uses react-hook-form to provide form context.
 *
 * @param {FormProps} props The form component props.
 * @returns {JSX.Element} The form component.
 */
export function Form<TData extends FieldValues>({
  form,
  onSubmit,
  children,
}: FormProps<TData>) {
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
