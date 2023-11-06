import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { ArticleViewSwitcher } from './ArticleViewSwitcher'

const meta = {
  title: 'features/ArticleViewSwitcher',
  component: ArticleViewSwitcher,
  tags: ['autodocs']
} satisfies Meta<typeof ArticleViewSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [ThemeDecorator('light')]
}

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')]
}
