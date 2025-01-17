import * as Headless from '@headlessui/react'
import { cx } from '@macklinu/cx'

export type FieldsetProps = {
  className?: string
} & Omit<Headless.FieldsetProps, 'as' | 'className'>

export const Fieldset = ({ className, ...props }: FieldsetProps) => (
  <Headless.Fieldset
    {...props}
    className={cx(
      className,
      '[&>*+[data-slot=control]]:mt-6 [&>[data-slot=text]]:mt-1'
    )}
  />
)

export const Legend = ({
  className,
  ...props
}: { className?: string } & Omit<Headless.LegendProps, 'as' | 'className'>) => (
  <Headless.Legend
    data-slot='legend'
    {...props}
    className={cx(
      className,
      'text-base/6 font-semibold text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white'
    )}
  />
)

export type FieldGroupProps = React.ComponentPropsWithoutRef<'div'>

export const FieldGroup = ({ className, ...props }: FieldGroupProps) => (
  <div data-slot='control' {...props} className={cx(className, 'space-y-8')} />
)

export type FieldProps = { className?: string } & Omit<
  Headless.FieldProps,
  'as' | 'className'
>

export const Field = ({ className, ...props }: FieldProps) => (
  <Headless.Field
    {...props}
    className={cx(
      className,
      '[&>[data-slot=label]+[data-slot=control]]:mt-3',
      '[&>[data-slot=label]+[data-slot=description]]:mt-1',
      '[&>[data-slot=description]+[data-slot=control]]:mt-3',
      '[&>[data-slot=control]+[data-slot=description]]:mt-3',
      '[&>[data-slot=control]+[data-slot=error]]:mt-3',
      '[&>[data-slot=label]]:font-medium'
    )}
  />
)

export type LabelProps = { className?: string } & Omit<
  Headless.LabelProps,
  'as' | 'className'
>

export const Label = ({ className, ...props }: LabelProps) => (
  <Headless.Label
    data-slot='label'
    {...props}
    className={cx(
      className,
      'select-none text-base/6 text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white'
    )}
  />
)

export type DescriptionProps = {
  className?: string
} & Omit<Headless.DescriptionProps, 'as' | 'className'>

export const Description = ({ className, ...props }: DescriptionProps) => (
  <Headless.Description
    data-slot='description'
    {...props}
    className={cx(
      className,
      'text-base/6 text-zinc-500 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-zinc-400'
    )}
  />
)

export type ErrorMessageProps = { className?: string } & Omit<
  Headless.DescriptionProps,
  'as' | 'className'
>

export const ErrorMessage = ({ className, ...props }: ErrorMessageProps) => (
  <Headless.Description
    data-slot='error'
    {...props}
    className={cx(
      className,
      'text-base/6 text-red-600 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-red-500'
    )}
  />
)
