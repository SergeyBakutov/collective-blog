import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { ArticlesSearch } from './ArticlesSearch'

const meta = {
  title: 'features/ArticlesSearch',
  component: ArticlesSearch,
  tags: ['autodocs'],
  args: {
    search: 'Value'
  }
} satisfies Meta<typeof ArticlesSearch>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [ThemeDecorator('light')]
}

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')]
}
