import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import ArticleDetailsPage from './ArticleDetailsPage'

const meta = {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  tags: ['autodocs']
} satisfies Meta<typeof ArticleDetailsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [ThemeDecorator('light')]
}

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')]
}
