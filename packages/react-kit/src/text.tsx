import { cx } from '@macklinu/cx'

export type TextProps = React.ComponentPropsWithRef<'p'>

export const text = ({ className }: TextProps) =>
  cx(className, 'text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400')

export const Text = ({ className, ...props }: TextProps) => (
  <p data-slot='text' {...props} className={text({ className })} />
)
