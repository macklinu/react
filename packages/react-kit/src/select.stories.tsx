import type { Meta, StoryObj } from '@storybook/react'

import { Description, ErrorMessage, Field, Label } from './fieldset'
import { Select } from './select'

const meta: Meta<typeof Select> = {
  title: 'Forms/Select',
  component: Select,
}

export default meta
type Story = StoryObj<typeof Select>

export const Primary: Story = {
  render: () => (
    <Field className='max-w-sm'>
      <Label>Select</Label>
      <Select defaultValue='2'>
        <option value='1'>Option 1</option>
        <option value='2'>Option 2</option>
        <option value='3'>Option 3</option>
      </Select>
      <Description>Something about this select</Description>
    </Field>
  ),
}

export const Invalid: Story = {
  render: () => (
    <Field className='max-w-sm'>
      <Label>Select</Label>
      <Select invalid defaultValue='2'>
        <option value='1'>Option 1</option>
        <option value='2'>Option 2</option>
        <option value='3'>Option 3</option>
      </Select>
      <ErrorMessage>Something is not right with this select</ErrorMessage>
    </Field>
  ),
}
