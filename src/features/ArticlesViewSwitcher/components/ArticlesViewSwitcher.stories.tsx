import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { ArticlesViewSwitcher } from './ArticlesViewSwitcher'

const meta = {
  title: 'features/ArticlesViewSwitcher',
  component: ArticlesViewSwitcher,
  tags: ['autodocs'],
  args: {
    view: 'list'
  }
} satisfies Meta<typeof ArticlesViewSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [ThemeDecorator('light')]
}

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')]
}
