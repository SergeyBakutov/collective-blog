import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { ArticlesSort } from './ArticlesSort'

const meta = {
  title: 'features/ArticlesSort',
  component: ArticlesSort,
  tags: ['autodocs'],
  args: {
    sort: 'title',
    sortOrder: 'asc'
  }
} satisfies Meta<typeof ArticlesSort>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [ThemeDecorator('light')]
}

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')]
}
