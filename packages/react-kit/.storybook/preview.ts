import '../src/index.css'

import type { Preview } from '@storybook/react'

export default {
  parameters: {
    backgrounds: {
      disable: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [
    (story, context) => {
      document.documentElement.classList.toggle(
        'dark',
        context.globals.theme === 'dark'
      )

      document.body.classList.add('bg-white', 'dark:bg-zinc-900')
      document.querySelectorAll('.docs-story').forEach((el) => {
        el.classList.add('bg-white', 'dark:bg-zinc-900')
      })

      return story()
    },
  ],
  tags: ['autodocs'],
} satisfies Preview
