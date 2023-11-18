import type { Meta, StoryObj } from '@storybook/react'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { type IComment } from '../../model/types/comment'
import { CommentList } from './CommentList'

const comments: IComment[] = [
  {
    id: 1,
    text: 'Some comment 1',
    user: {
      id: 1,
      username: 'test',
      avatar: 'https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676296367166243426.png'
    }
  },
  {
    id: 2,
    text: 'Some comment 2',
    user: {
      id: 1,
      username: 'test',
      avatar: 'https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676296367166243426.png'
    }
  }
]

const meta = {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  tags: ['autodocs'],
  decorators: [
    RouterDecorator({})
  ],
  args: {
    comments
  }
} satisfies Meta<typeof CommentList>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [ThemeDecorator('light')]
}

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')]
}

export const IsLoading: Story = {
  args: {
    isLoading: true
  },
  decorators: [ThemeDecorator('light')]
}
