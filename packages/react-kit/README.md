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

Now you can import and use the components.

```tsx
import { Button } from '@macklinu/react-kit'

export const MyComponent = () => {
  return <Button>Click me</Button>
}
```
