# @macklinu/react-hooks

> My personal library of custom React hooks

## Installation

```sh
pnpm add @macklinu/react-hooks
```

## Usage

<!-- TODO add docs site maybe? -->

```tsx
import { usePrevious } from '@macklinu/react-hooks'

export const MyComponent = ({ value }) => {
  const previousValue = usePrevious(value)

  // ...
}
```
