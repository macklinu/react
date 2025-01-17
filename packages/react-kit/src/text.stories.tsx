import type { Meta, StoryObj } from '@storybook/react'

import { Text } from './text'

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
}

export default meta
type Story = StoryObj<typeof Text>

export const Primary: Story = {
  args: {
    children: 'Here is some text!',
  },
}
