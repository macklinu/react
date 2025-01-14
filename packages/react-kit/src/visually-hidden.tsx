import { cx } from '@macklinu/cx'
import type { HTMLAttributes, ReactNode } from 'react'

export type VisuallyHiddenProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode
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
