import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator'
import { Select } from './Select'

const meta = {
  title: 'shared/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    label: 'Label',
    value: 'Option 3',
    options: [
      { value: 'Option 1', content: 'Option 1' },
      { value: 'Option 2', content: 'Option 2' },
      { value: 'Option 3', content: 'Option 3' }
    ]
  }
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [ThemeDecorator('light')]
}

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')]
}

export const Readonly: Story = {
  args: {
    readonly: true
  },
  decorators: [ThemeDecorator('light')]
}
