import type { Meta, StoryObj } from '@storybook/react'

import { Badge, colors } from './badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
}

export default meta
type Story = StoryObj<typeof Badge>

export const Primary: Story = {
  args: {
    children: 'info',
  },
}

export const All: Story = {
  render: () => (
    <div className='flex flex-row gap-1'>
      {Object.keys(colors).map((color) => (
        <Badge key={color} color={color as keyof typeof colors}>
          {color}
        </Badge>
      ))}
    </div>
  ),
}
