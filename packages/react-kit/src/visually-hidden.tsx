import { cx } from '@macklinu/cx'

export type VisuallyHiddenProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode
}

export const VisuallyHidden = ({
  children,
  className,
  ...props
}: VisuallyHiddenProps) => (
  <span className={cx('sr-only', className)} {...props}>
    {children}
  </span>
)
