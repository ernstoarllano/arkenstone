'use client';

type FormSubmitProps = {
  /**
   * The value of the submit button.
   */
  value: string;

  /**
   * Whether the form is submitting.
   */
  isSubmitting?: boolean;

  /**
   * Whether the form submit button is disabled.
   */
  isDisabled?: boolean;
};

/**
 * A generic form submit button component.
 *
 * @param {FormSubmitProps} props The submit button component props.
 * @returns {JSX.Element} The submit button component.
 */
export function FormSubmit({
  value,
  isSubmitting,
  isDisabled,
}: FormSubmitProps) {
  return (
    <button
      type="submit"
      className="h-full min-w-[64px] animate-none"
      disabled={isDisabled}
    >
      {isSubmitting ? 'Submitting' : value}
    </button>
  );
}
