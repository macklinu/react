import {
  Link as AriaLink,
  type LinkProps as AriaLinkProps,
} from 'react-aria-components'

export const Link = (props: AriaLinkProps) => {
  return <AriaLink {...props} />
}
