import type { Meta, StoryObj } from '@storybook/react'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { CommentCard } from './CommentCard'

const meta = {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  tags: ['autodocs'],
  decorators: [
    RouterDecorator({})
  ],
  args: {
    comment: {
      id: 1,
      text: 'Some comment',
      user: {
        id: 1,
        username: 'test',
        avatar: 'https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676296367166243426.png'
      }
    }
  }
} satisfies Meta<typeof CommentCard>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [ThemeDecorator('light')]
}

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')]
}
