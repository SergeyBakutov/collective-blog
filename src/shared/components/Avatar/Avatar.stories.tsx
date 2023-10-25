import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { Avatar } from './Avatar'

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://phonoteka.org/uploads/posts/2022-09/1663693001_1-phonoteka-org-p-muzhskie-oboi-na-telefon-vkontakte-1.jpg'
  }
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [ThemeDecorator('light')]
}

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')]
}

export const Size100: Story = {
  args: {
    size: 200
  },
  decorators: [ThemeDecorator('light')]
}

export const Size50: Story = {
  args: {
    size: 50
  },
  decorators: [ThemeDecorator('light')]
}
