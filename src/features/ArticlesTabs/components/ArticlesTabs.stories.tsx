import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { ArticlesTabs } from './ArticlesTabs'

const meta = {
  title: 'features/ArticlesTabs',
  component: ArticlesTabs,
  tags: ['autodocs'],
  args: {
    type: 'economics'
  }
} satisfies Meta<typeof ArticlesTabs>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [ThemeDecorator('light')]
}

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')]
}
