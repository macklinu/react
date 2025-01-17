import { cx } from '@macklinu/cx'

export type CodeProps = React.ComponentPropsWithRef<'code'>

export const code = ({ className }: CodeProps) =>
  cx(
    className,
    'rounded border border-zinc-950/10 bg-zinc-950/[2.5%] px-0.5 text-sm font-medium text-zinc-950 sm:text-[0.8125rem] dark:border-white/20 dark:bg-white/5 dark:text-white'
  )

export const Code = ({ className, ...props }: CodeProps) => (
  <code data-slot='code' {...props} className={code({ className })} />
)
