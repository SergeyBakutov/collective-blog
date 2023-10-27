import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import ArticlesPage from './ArticlesPage'

const meta = {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  tags: ['autodocs']
} satisfies Meta<typeof ArticlesPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [ThemeDecorator('light')]
}

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')]
}
