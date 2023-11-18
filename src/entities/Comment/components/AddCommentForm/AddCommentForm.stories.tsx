import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { AddCommentForm } from './AddCommentForm'

const meta = {
  title: 'entities/Comment/AddCommentForm',
  component: AddCommentForm,
  tags: ['autodocs'],
  args: {
    text: 'Some comment'
  }
} satisfies Meta<typeof AddCommentForm>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [ThemeDecorator('light')]
}

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')]
}
