import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import AddNewCommentForArticle from './AddNewCommentForArticle'

const meta = {
  title: 'features/AddNewCommentForArticle',
  component: AddNewCommentForArticle,
  tags: ['autodocs']
} satisfies Meta<typeof AddNewCommentForArticle>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [ThemeDecorator('light'), StoreDecorator({
    addNewCommentForArticle: {
      text: '123'
    }
  })]
}

export const Dark: Story = {
  decorators: [ThemeDecorator('dark'), StoreDecorator({
    addNewCommentForArticle: {
      text: '123'
    }
  })]
}

export const IsLoading: Story = {
  decorators: [ThemeDecorator('light'), StoreDecorator({
    addNewCommentForArticle: {
      text: '123',
      isLoading: true
    }
  })]
}

export const Error: Story = {
  decorators: [ThemeDecorator('light'), StoreDecorator({
    addNewCommentForArticle: {
      text: '123',
      error: 'error'
    }
  })]
}
