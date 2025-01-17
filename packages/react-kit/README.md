# @macklinu/react-kit

> My personal React UI library

<!-- TODO add Storybook docs link -->

## Installation

```sh
pnpm add @macklinu/react-kit
```

## Usage

This React component library is built with Tailwind v4, so ensure you have Tailwind set up in your own repo.

<!-- TODO add Tailwind setup links once v4 is stable -->

Then, import the library's CSS file in your main CSS file.

```css
@import 'tailwindcss';
@import '@macklinu/react-kit';
```

Wrap your app in a `RouterProvider` for framework specific link support (see react-aria-components [docs](https://react-spectrum.adobe.com/react-aria/routing.html)).

```tsx
// react-router example
import {
  type NavigateOptions,
  Outlet,
  useHref,
  useNavigate,
} from 'react-router-dom'

declare module 'react-aria-components' {
  interface RouterConfig {
    routerOptions: NavigateOptions
  }
}

const App = () => {
  const navigate = useNavigate()

  return (
    <RouterProvider navigate={navigate} useHref={useHref}>
      <Outlet />
    </RouterProvider>
  )
}
```

Now you can import and use the components.

```tsx
import { Button } from '@macklinu/react-kit'

export const MyComponent = () => {
  return <Button>Click me</Button>
}
```

For more flexibility, you can import some of the styles to apply to different HTML elements.

```tsx
import { button } from '@macklinu/react-kit/styles'

export const MyComponent = () => {
  return (
    <a href='/path' className={button({ outline: true, color: 'blue' })}>
      Click me
    </a>
  )
}
```
