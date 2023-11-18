import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator'
import { Tabs } from './Tabs'

const meta = {
  title: 'shared/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: {
    tabs: [
      { value: 'tab 1', content: 'tab 1' },
      { value: 'tab 2', content: 'tab 2' },
      { value: 'tab 3', content: 'tab 3' }
    ],
    value: 'tab 1'
  }
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [ThemeDecorator('light')]
}

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')]
}
